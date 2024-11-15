using AngularDotNetEcommercial.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Reflection.Emit;

namespace AngularDotNetEcommercial.Infrastructure.Config
{
    public class ProductConfig:IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.Property(x => x.Quantity).IsRequired();
            builder.Property(x => x.Name).IsRequired();
            builder.Property(x => x.Price).IsRequired();
            builder.Property(x => x.CategoryId).IsRequired();
            builder.Property(x => x.Description).IsRequired();
            builder.Property(x=>x.CreateDate).IsRequired();
            builder.Property(x => x.RowVersion).IsRequired();
            //builder.Property(x => x.ProductDiscounts).IsRequired();
            //không dduocj sử dụng require vì đây đang xài khóa ngoại
            builder.HasOne(x => x.Category)
                   .WithMany(x => x.Products)
                   .HasForeignKey(x => x.CategoryId)
                   .OnDelete(DeleteBehavior.Restrict);
            builder.Property(x => x.RowVersion).IsRequired().IsRowVersion();

        }
    }
}
