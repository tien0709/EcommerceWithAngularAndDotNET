using AngularDotNetEcommercial.Core.Entities;
using AngularDotNetEcommercial.Server.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace AngularDotNetEcommercial.Server.Services.Abstraction
{
    public interface ICartItemService : IGenericService<CartItem>
    {
        Task CreateCartItem(CartItem cartItem);
        Task UpdateCartItem(CartItem cartItem);
    }
}
