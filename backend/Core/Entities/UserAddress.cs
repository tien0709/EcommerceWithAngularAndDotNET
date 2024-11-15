using AngularDotNetEcommercial.Core.BaseEntities;
using System.Net;

namespace AngularDotNetEcommercial.Core.Entities
{
    public class UserAddress: BaseEntity
    {
        public string UserId { get; set; } = null!;

        public User User { get; set; } = null!;

        public string Address { get; set; } = null!;

        public string PhoneNumber { get; set; } = null!;

    }
}
