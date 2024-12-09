using System.ComponentModel.DataAnnotations;

namespace AngularDotNetEcommercial.Server.Dtos
{
    public class CategoryDto
    {
        [Required]
        public string Id { get; set; }
        [Required]
        public string Name { get; set; } = null!;
    }
}
