using System.ComponentModel.DataAnnotations;

namespace AngularDotNetEcommercial.Server.Dtos
{
    public class LoginDto
    {
        [Required]
        public string UserName { get; set; } = null!;

        [Required]
        public string Password { get; set; } = null!;
    }
}
