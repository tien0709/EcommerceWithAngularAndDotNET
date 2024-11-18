namespace AngularDotNetEcommercial.Core.Entities
{
    public class ProductDiscount
    {
        public int ProductId { get; set; }
        public Product Product { get; set; } = null!;
        public int DiscountId { get; set; }
        public Discount Discount { get; set; } = null!;
    }
}
