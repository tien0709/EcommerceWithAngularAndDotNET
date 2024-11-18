using AngularDotNetEcommercial.Core.Entities;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace AngularDotNetEcommercial.Server.Utils
{
    public interface IJwtUtils
    {
        public string GenerateToken(User user, string role);
        public TokenValidationResult ValidateToken(string token);
    }

    public class JwtUtils: IJwtUtils
    {
        private readonly IConfiguration _configuration;
        public JwtUtils(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string GenerateToken(User user, string role)
        {
            var claims = new List<Claim>
            {
                    new Claim(ClaimTypes.NameIdentifier, user.Id),  // Claim cho user.Id
                    new Claim(ClaimTypes.Name, user.UserName),      // Claim cho username (nếu cần thiết)
                    new Claim(ClaimTypes.Role, role)                // Claim cho role
            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]!));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddHours(5);

            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: expires,
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public TokenValidationResult ValidateToken(string token)
        {
            if (string.IsNullOrEmpty(token))
            {
                return new TokenValidationResult
                {
                    IsValid = false
                };
            }

            try
            {
                var validationParameters = new TokenValidationParameters
                {
                    // Validate base ìnformation
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,

                    // Validate time
                    ClockSkew = TimeSpan.Zero,  // mustn't skew of time 
                    RequireExpirationTime = false, // Token dont have to Expiration Time 

                    //server, client and Symmetric key
                    ValidIssuer = _configuration["Jwt:Issuer"],
                    ValidAudience = _configuration["Jwt:Audience"],
                    IssuerSigningKey = new SymmetricSecurityKey(
                        Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]))
                };

                // cretea JWT Handler
                var handler = new JwtSecurityTokenHandler();

                // Validate token và get ClaimsPrincipal
                ClaimsPrincipal principal = handler.ValidateToken(token,
                    validationParameters,
                    out SecurityToken validatedToken);

                //  Cast to JwtSecurityToken for get add Infomation(if need)
                var jwtToken = (JwtSecurityToken)validatedToken;

                //  check claim
                var userIdClaim = principal.FindFirst(ClaimTypes.NameIdentifier);

                if (userIdClaim == null)
                {
                    // Nếu không tìm thấy claim, token không hợp lệ
                    return new TokenValidationResult
                    {
                        IsValid = false
                    };
                }

                return new TokenValidationResult
                {
                    IsValid = true,
                    SecurityToken = jwtToken,
                };


            }
            catch (Exception)
            {
                return new TokenValidationResult
                {
                    IsValid = false,
                };
            }          
        }

    }
}
