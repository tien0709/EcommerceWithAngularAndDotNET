using AngularDotNetEcommercial.Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace AngularDotNetEcommercial.Infrastructure.Data
{
    public class StoreContext : IdentityDbContext<User, Role, string>
    {
        public StoreContext(DbContextOptions<StoreContext> options) : base(options)
        {
        }
        public DbSet<Product> Product{ get; set; }

        public DbSet<About> About { get; set; }

        public DbSet<UserAddress> UserAddress { get; set; }

        public DbSet<UserPayment> UserPayment { get; set; }

        public DbSet<PaymentDetails> PaymentDetail{ get; set; }

        public DbSet<OrderDetails> OrderDetails { get; set; }

        public DbSet<Blog> Blog { get; set; }

        public DbSet<CartItem> CartItem { get; set; }

        public DbSet<Category> Category { get; set; }

        public DbSet<Contact> Contact { get; set; }

        public DbSet<Discount> Discount { get; set; }
        public DbSet<ProductDiscount> ProductDiscounts { get; set; }

        public DbSet<ShoppingSession> ShoppingSession { get; set; }
        public DbSet<OrderItems> OrderItems{ get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());//Apply config in Config folder
            base.OnModelCreating(modelBuilder);
        }

    }
}
