using AngularDotNetEcommercial.Core.BaseEntities;

namespace AngularDotNetEcommercial.Core.Entities
{
    public class CartItem: BaseEntity
    {
        public int ShoppingSessionId { get; set; }

        public ShoppingSession ShoppingSession { get; set; } = null!;

        public int ProductId { get; set; }

        public Product Product { get; set; } = null!;

        public int Quantity { get; set; }

    }
}
