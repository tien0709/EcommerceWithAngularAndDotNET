using AngularDotNetEcommercial.Core.BaseEntities;
using System;

namespace AngularDotNetEcommercial.Core.Entities
{
    public class OrderDetails: BaseEntity
    {

        public string UserId { get; set; } = null!;

        public float Total { get; set; }

        public PaymentDetails PaymentDetails { get; set; } = null!;
    }
}
