namespace AngularDotNetEcommercial.Core.Entities
{
    public class ProductDiscount
    {
        public string ProductId { get; set; } = null!;
        public Product Product { get; set; } = null!;
        public string DiscountId { get; set; } = null!;
        public Discount Discount { get; set; } = null!;
    }
}
