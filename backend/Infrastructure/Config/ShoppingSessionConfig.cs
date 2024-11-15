using AngularDotNetEcommercial.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Reflection.Emit;

namespace AngularDotNetEcommercial.Infrastructure.Config
{
    public class ShoppingSessionConfig:IEntityTypeConfiguration<ShoppingSession>
    {
        public void Configure(EntityTypeBuilder<ShoppingSession> builder)
        {
            builder.Property(x=>x.RowVersion).IsRequired();
            builder.Property(x => x.CreateDate).IsRequired();
            builder.Property(x => x.UserId).IsRequired();
            builder.Property(x => x.RowVersion).IsRequired().IsRowVersion();

        }
    }
}
