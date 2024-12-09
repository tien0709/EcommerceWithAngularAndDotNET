using AngularDotNetEcommercial.Core.Entities;

namespace AngularDotNetEcommercial.Server.Dtos
{
    public class ProductDto
    {
        public string? Id { get; set; }
        public string CategoryId { get; set; } = null!;

        public CategoryDto? Category { get; set; }
        public string Name { get; set; } = null!;
        public float Price { get; set; }
        public string Description { get; set; } = null!;
        public int Quantity { get; set; }
        public string ImageUrl { get; set; } = null!;
        public ICollection<string>? ProductDiscounts { get; set; }
    }
}
