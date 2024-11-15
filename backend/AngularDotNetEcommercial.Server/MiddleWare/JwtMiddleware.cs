using AngularDotNetEcommercial.Server.Services;
using AngularDotNetEcommercial.Server.Utils;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace AngularDotNetEcommercial.Server.MiddleWare
{
    //trước khi request đến server
    public class JwtMiddleware
    {
        private readonly RequestDelegate _next;

        public JwtMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context, IUserService userService, IJwtUtils jwtUtils)
        {
            var token = context.Request.Headers["authorization"].FirstOrDefault()?.Split(" ").Last();
            var validationResult = jwtUtils.ValidateToken(token);
            if (validationResult.IsValid)
            {
                var jwtToken = validationResult.SecurityToken as JwtSecurityToken;
                if (jwtToken != null)
                {
                    var userIdClaim = jwtToken.Claims.FirstOrDefault(c=>c.Type == ClaimTypes.NameIdentifier);
                    var user = userService.GetById(userIdClaim.Value);
                    var role = await userService.GetUserRoleAsync(userIdClaim.Value);
                    context.Items["User"] = user;
                    context.Items["Role"] = role;
                }
            }

            await _next(context);
        }
    }
}
