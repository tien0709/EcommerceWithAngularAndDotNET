using AngularDotNetEcommercial.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Reflection.Emit;

namespace AngularDotNetEcommercial.Infrastructure.Config
{
    public class UserPaymentConfig:IEntityTypeConfiguration<UserPayment>
    {
        public void Configure(EntityTypeBuilder<UserPayment> builder)
        {
            builder.Property(x=>x.RowVersion).IsRequired();
            builder.Property(x => x.CreateDate).IsRequired();
            builder.Property(x => x.UserId).IsRequired();
            builder.Property(x => x.PaymentType).IsRequired();
            builder.Property(x => x.AccountNo).IsRequired();
            builder.Property(x => x.RowVersion).IsRequired().IsRowVersion();

        }
    }
}
