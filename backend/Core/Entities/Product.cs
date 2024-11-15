using AngularDotNetEcommercial.Core.BaseEntities;
using System;
using System.Text.Json.Serialization;

namespace AngularDotNetEcommercial.Core.Entities
{
    public class Product: BaseEntity
    {
        public int CategoryId { get; set; }
        public Category Category { get; set; } = null!;
        public string Name { get; set; } = null!;
        public float Price { get; set; }
        public string Description { get; set; } = null!;
        public int Quantity { get; set; }

        public string ImageUrl { get; set; } = null!;
        public ICollection<ProductDiscount> ProductDiscounts { get; set; } = null!;
    }
}
