using AngularDotNetEcommercial.Core.Entities;

namespace AngularDotNetEcommercial.Server.Dtos
{
    public class ProductDto
    {
        public string Id { get; set; } = null!;
        public string Category { get; set; } = null!;
        public string Name { get; set; } = null!;
        public float Price { get; set; }
        public string Description { get; set; } = null!;
        public int Quantity { get; set; }
        public string ImageUrl { get; set; } = null!;
        public ICollection<string> ProductDiscounts { get; set; } = null!;
    }
}
