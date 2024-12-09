using AngularDotNetEcommercial.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Reflection.Emit;

namespace AngularDotNetEcommercial.Infrastructure.Config
{
    public class ContactConfig: IEntityTypeConfiguration<Contact>
    {
        public void Configure(EntityTypeBuilder<Contact> builder)
        {
            builder.Property(x => x.Address).IsRequired();
            builder.Property(x => x.EmailCustomerSupport).IsRequired();
            builder.Property(x => x.PhoneNumber).IsRequired();
            builder.Property(x => x.Timeline).IsRequired();
            builder.Property(x => x.CreateDate).IsRequired();
            builder.Property(x => x.RowVersion).IsRequired().IsRowVersion();
        }
    }
}
