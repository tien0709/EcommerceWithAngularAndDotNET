using AngularDotNetEcommercial.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Reflection.Emit;

namespace AngularDotNetEcommercial.Infrastructure.Config
{
    public class CategoryConfig: IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> builder)
        {
            builder.Property(x => x.Name).IsRequired();
            builder.Property(x => x.CreateDate).IsRequired();
            builder.Property(x => x.RowVersion).IsRequired().IsRowVersion();
            builder.HasMany(x => x.Products)
                .WithOne(x => x.Category)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
