using AngularDotNetEcommercial.Core.Entities;
using AngularDotNetEcommercial.Server.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace AngularDotNetEcommercial.Server.Services.Abstraction
{
    public interface ICartService : IGenericService<Cart>
    {
        Task<Cart> GetCartItemsByUserIdAsync(string userId);
        Task UpdateCart(Cart cart);
    }
}
