using AngularDotNetEcommercial.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AngularDotNetEcommercial.Infrastructure.Config
{
    public class PaymentDetailsConfig:IEntityTypeConfiguration<PaymentDetails>
    {
        public void Configure(EntityTypeBuilder<PaymentDetails> builder)
        {
            builder.Property(x => x.OrderDetailsId).IsRequired();
            builder.Property(x=>x.status).IsRequired();
            builder.Property(x => x.Amount).IsRequired();
            builder.Property(x => x.Provider).IsRequired();
            builder.Property(x=>x.CreateDate).IsRequired();
            builder.Property(x => x.RowVersion).IsRequired();
            builder.Property(x => x.RowVersion).IsRequired().IsRowVersion();

        }
    }
}
