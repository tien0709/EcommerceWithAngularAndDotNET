using System.ComponentModel.DataAnnotations;

namespace AngularDotNetEcommercial.Server.Dtos
{
    public class RegisterDto
    {
        [Required]
        public string UserName { get; set; } = null!;
        [Required]
        [EmailAddress]
        public string Email { get; set; } = null!;

        [Required]
        public string Password { get; set; } = null!;
    }
}
