using AngularDotNetEcommercial.Core.BaseEntities;

namespace AngularDotNetEcommercial.Core.Entities
{
    public class CartItem: BaseEntity
    {
        public string ProductId { get; set; } =null!;
        public string CartId { get; set; } = null!;
        public int Quantity { get; set; }
        public float Price { get; set; }

        public Product Product { get; set; } 
    }
}
