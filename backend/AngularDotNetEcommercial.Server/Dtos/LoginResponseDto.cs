using System.ComponentModel.DataAnnotations;

namespace AngularDotNetEcommercial.Server.Dtos
{
    public class LoginResponseDto
    {
        [Required]
        public string Id { get; set; } = null!;
        [Required]
        public string UserName { get; set; } = null!;
        public string Token { get; set; } = null!;
    }
}
