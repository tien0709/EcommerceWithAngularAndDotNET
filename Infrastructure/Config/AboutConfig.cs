using AngularDotNetEcommercial.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Reflection.Emit;

namespace AngularDotNetEcommercial.Infrastructure.Config
{
    public class AboutConfig: IEntityTypeConfiguration<About>
    {
        public void Configure(EntityTypeBuilder<About> builder)
        {
            builder.Property(x => x.AboutUs).IsRequired();
            builder.Property(x => x.UserId).IsRequired();
            builder.Property(x => x.Career).IsRequired();
            builder.Property(x => x.Colaboration).IsRequired();
            builder.Property(x => x.CreateDate).IsRequired();
            builder.Property(x => x.Feedback).IsRequired();
            builder.Property(x => x.RowVersion).IsRequired().IsRowVersion();
        }
    }
}
