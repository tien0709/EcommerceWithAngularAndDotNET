using AngularDotNetEcommercial.Server.Services;
using AngularDotNetEcommercial.Server.Services.Abstraction;
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
            if (string.IsNullOrEmpty(token))
            {
                // have some page dont need to login so dont need token
                //await context.Response.WriteAsync("Token is missing.");
            }
            else
            {
                var validationResult = jwtUtils.ValidateToken(token);
                if (validationResult.IsValid)
                {
                    var jwtToken = validationResult.SecurityToken as JwtSecurityToken;
                    if (jwtToken != null)
                    {
                        var userIdClaim = jwtToken.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier);
                        var user = await userService.GetByIdAsync(userIdClaim.Value);
                        var userRoleClaim = jwtToken.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Role);
                        var role =  userRoleClaim?.Value;
                        context.Items["User"] = user;
                        context.Items["Role"] = role;
                        context.Items["Id"] = userIdClaim.Value;
                    }
                }
                else
                {
                    // Nếu token không hợp lệ hoặc đã hết hạn, trả về 401 Unauthorized
                    context.Response.StatusCode = StatusCodes.Status401Unauthorized;
                    await context.Response.WriteAsync("Token is expired or invalid.");
                    return;
                }
            }
           

            await _next(context);
        }
    }
}
