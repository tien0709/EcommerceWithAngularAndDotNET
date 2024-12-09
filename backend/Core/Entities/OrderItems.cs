using AngularDotNetEcommercial.Core.BaseEntities;

namespace AngularDotNetEcommercial.Core.Entities
{
    public class OrderItems: BaseEntity
    {
        public string OrderDetailsId { get; set; } = null!;

        public string  ProductId { get; set; } = null!;

        public Product Product { get; set; }


    }
}
