using AngularDotNetEcommercial.Core.BaseEntities;
using System;

namespace AngularDotNetEcommercial.Core.Entities
{
    public class OrderDetails: BaseEntity
    {

        public string UserId { get; set; } = null!;

        public string Email{ get; set; } = null!;

        public string Address { get; set; } = null!;

        public float Total { get; set; }

        public ICollection<OrderItems> Items { get; set; }
    }
}
