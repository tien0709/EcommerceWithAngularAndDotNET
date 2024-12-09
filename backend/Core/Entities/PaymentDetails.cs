using AngularDotNetEcommercial.Core.BaseEntities;

namespace AngularDotNetEcommercial.Core.Entities
{
    public class PaymentDetails: BaseEntity
    {
        public string OrderDetailsId { get; set; } = null!;
        public OrderDetails OrderDetails { get; set; } = null!;

        public int Amount { get; set; }

        public string Provider { get; set; } = null!;

        public string status { get; set; } = null!;

    }
}
