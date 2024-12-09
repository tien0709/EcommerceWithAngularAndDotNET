using AngularDotNetEcommercial.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Reflection.Emit;

namespace AngularDotNetEcommercial.Infrastructure.Config
{
    public class CartConfig: IEntityTypeConfiguration<Cart>
    {
        public void Configure(EntityTypeBuilder<Cart> builder)
        {
            builder.Property(x => x.UserId).IsRequired();
            builder.Property(x => x.CreateDate).IsRequired();
            builder.Property(x => x.RowVersion).IsRequired().IsRowVersion();
        }
    }
}
