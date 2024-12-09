using AngularDotNetEcommercial.Core.Entities;
using System.ComponentModel.DataAnnotations;

namespace AngularDotNetEcommercial.Server.Dtos
{
    public class UserDto
    {
        [Required]
        public string UserName { get; set; } = null!;
        [Required]
        public string Email{ get; set; } = null!;
        [Required]
        public string PhoneNumber { get; set; } = null!;
    }
}
