using AngularDotNetEcommercial.Core.Entities;
using System.ComponentModel.DataAnnotations;

namespace AngularDotNetEcommercial.Server.Dtos
{
    public class BlogDto
    {
        public string? Id { get; set; } 
        [Required]
        public string Title { get; set; } = null!;
        [Required]
        public string SourceImage { get; set; } = null!;
        [Required]
        public string Body { get; set; } = null!;
        public string? UpdateDate { get; set; }
    }
}
