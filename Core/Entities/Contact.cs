using AngularDotNetEcommercial.Core.BaseEntities;
using System.Net;

namespace AngularDotNetEcommercial.Core.Entities
{
    public class Contact: BaseEntity
    {
        public string PhoneNumber { get; set; } = null!;

        public string Address { get; set; } = null!;

        public string Timeline { get; set; } = null!;

        public string EmailCustomerSupport { get; set; } = null!;

        public string EmailGeneralInquire { get; set; } = null!;

        public string EmailFeedback { get; set; } = null!;
    }
}
