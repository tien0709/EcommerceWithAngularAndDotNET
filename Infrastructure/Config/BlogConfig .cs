using AngularDotNetEcommercial.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Reflection.Emit;

namespace AngularDotNetEcommercial.Infrastructure.Config
{
    public class BlogConfig: IEntityTypeConfiguration<Blog>
    {
        public void Configure(EntityTypeBuilder<Blog> builder)
        {
            builder.Property(x => x.UserId).IsRequired();
            builder.Property(x => x.Body).IsRequired();
            builder.Property(x => x.UserId).IsRequired();
            builder.Property(x => x.CreateDate).IsRequired();
            builder.Property(x => x.Title).IsRequired();
            builder.Property(x => x.RowVersion).IsRequired().IsRowVersion();
        }
    }
}
