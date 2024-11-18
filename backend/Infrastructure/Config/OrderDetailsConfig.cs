using AngularDotNetEcommercial.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AngularDotNetEcommercial.Infrastructure.Config
{
    public class OrderDetailsConfig: IEntityTypeConfiguration<OrderDetails>
    {
        public void Configure(EntityTypeBuilder<OrderDetails> builder)
        {
            builder.Property(x => x.UserId).IsRequired();
            builder.Property(x => x.RowVersion).IsRequired();
            builder.Property(x => x.CreateDate).IsRequired();
            builder.HasOne(od => od.PaymentDetails)
                    .WithOne(pd => pd.OrderDetails)
                    .HasForeignKey<PaymentDetails>(pd => pd.OrderDetailsId);
            builder.Property(x => x.RowVersion).IsRequired().IsRowVersion();
        }
    }
}
