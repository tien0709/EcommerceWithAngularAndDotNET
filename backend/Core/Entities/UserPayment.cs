using AngularDotNetEcommercial.Core.BaseEntities;

namespace AngularDotNetEcommercial.Core.Entities
{
    public class UserPayment: BaseEntity
    {
        public string UserId { get; set; } = null!;

        public User User { get; set; } = null!;

        public int PaymentType { get; set; }
        public string AccountNo { get; set; } = null!;
    }
}
