using AngularDotNetEcommercial.Core.Entities;
using System.ComponentModel.DataAnnotations;

namespace AngularDotNetEcommercial.Server.Dtos
{
    public class ContactDto
    {
        [Required]
        public string PhoneNumber { get; set; } = null!;
        [Required]
        public string Address { get; set; } = null!;
        [Required]
        public string Timeline { get; set; } = null!;
        [Required]
        public string EmailCustomerSupport { get; set; } = null!;
    }
}
