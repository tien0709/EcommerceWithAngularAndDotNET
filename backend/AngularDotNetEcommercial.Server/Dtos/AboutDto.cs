using AngularDotNetEcommercial.Core.Entities;
using System.ComponentModel.DataAnnotations;

namespace AngularDotNetEcommercial.Server.Dtos
{
    public class AboutDto
    {
        [Required]
        public string AboutUs { get; set; } = null!;
        [Required]
        public string Feedback { get; set; } = null!;
        [Required]
        public string Career { get; set; } = null!;
        [Required]
        public string Colaboration { get; set; } = null!;
    }
}
