using AngularDotNetEcommercial.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AngularDotNetEcommercial.Infrastructure.Config
{
    public class OrderItemsConfig:IEntityTypeConfiguration<OrderItems>
    {
        public void Configure(EntityTypeBuilder<OrderItems> builder)
        {
            builder.Property(x => x.OrderDetailsId).IsRequired();
            builder.Property(x=>x.ProductId).IsRequired();
            builder.Property(x=>x.CreateDate).IsRequired();
            builder.Property(x => x.RowVersion).IsRequired();
            builder.Property(x => x.RowVersion).IsRequired().IsRowVersion();

        }
    }
}
