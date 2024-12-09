using AngularDotNetEcommercial.Core.BaseEntities;

namespace AngularDotNetEcommercial.Core.Entities
{
    public class Cart: BaseEntity
    {
        public string UserId { get; set; } = null!;  
        public ICollection<CartItem> Items { get; set; }

    }
}
