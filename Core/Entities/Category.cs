using AngularDotNetEcommercial.Core.BaseEntities;
using System.Text.Json.Serialization;

namespace AngularDotNetEcommercial.Core.Entities
{
    public class Category: BaseEntity
    {
        public string Name { get; set; } = null!;
        [JsonIgnore] // Prevent serialization of this property to prevent Cycle
        public ICollection<Product> Products { get; set; } = null!;
    }
}
