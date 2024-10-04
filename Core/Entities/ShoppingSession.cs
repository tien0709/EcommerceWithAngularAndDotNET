using AngularDotNetEcommercial.Core.BaseEntities;
using System;

namespace AngularDotNetEcommercial.Core.Entities
{
    public class ShoppingSession: BaseEntity
    {
        public string UserId { get; set; } = null!;

        public User User { get; set; } = null!;

        public float total { get; set; }
    }
}
