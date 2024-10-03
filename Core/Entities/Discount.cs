using System;
using AngularDotNetEcommercial.Core.BaseEntities;

namespace AngularDotNetEcommercial.Core.Entities
{
    public class Discount: BaseEntity
    {
        public string  name { get; set; } = null!;

        public string  description { get; set; } = null!;

        public float DiscountPercent { get; set; }
        public ICollection<ProductDiscount> ProductDiscounts { get; set; } = null!;
    }
}
