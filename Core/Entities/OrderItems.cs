using AngularDotNetEcommercial.Core.BaseEntities;

namespace AngularDotNetEcommercial.Core.Entities
{
    public class OrderItems: BaseEntity
    {
        public int OrderDetailsId { get; set; } 

        public int  ProductId { get; set; } 

        public Product Product { get; set; } = null!;

        public OrderDetails OrderDetails {  get; set; } = null!;

    }
}
