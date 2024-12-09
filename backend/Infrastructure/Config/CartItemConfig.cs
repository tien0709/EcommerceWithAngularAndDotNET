using AngularDotNetEcommercial.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Reflection.Emit;

namespace AngularDotNetEcommercial.Infrastructure.Config
{
    public class CartItemConfig: IEntityTypeConfiguration<CartItem>
    {
        public void Configure(EntityTypeBuilder<CartItem> builder)
        {
            builder.Property(x => x.Quantity).IsRequired();
            builder.Property(x => x.CreateDate).IsRequired();
            builder.Property(x => x.ProductId).IsRequired();
            builder.Property(x => x.RowVersion).IsRequired().IsRowVersion();
        }
    }
}
