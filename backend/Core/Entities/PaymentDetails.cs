using AngularDotNetEcommercial.Core.BaseEntities;

namespace AngularDotNetEcommercial.Core.Entities
{
    public class PaymentDetails: BaseEntity
    {
        public int OrderDetailsId { get; set; }
        public OrderDetails OrderDetails { get; set; } = null!;

        public int Amount { get; set; }

        public string Provider { get; set; } = null!;

        public string status { get; set; } = null!;

    }
}
