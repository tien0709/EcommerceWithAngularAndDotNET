using AngularDotNetEcommercial.Core.Entities;

namespace AngularDotNetEcommercial.Server.Dtos
{
    public class CartItemDto
    {
        public Product Product { get; set; } = null!;

        public int Quantity { get; set; }
    }
}
