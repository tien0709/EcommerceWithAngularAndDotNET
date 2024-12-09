using AngularDotNetEcommercial.Core.Entities;
using AngularDotNetEcommercial.Backend.Infrastructure.Data;
using AngularDotNetEcommercial.Server.Dtos;
using AngularDotNetEcommercial.Server.Errors;
using AngularDotNetEcommercial.Server.Utils;
using AutoMapper;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.IdentityModel.Tokens;
using System.Net.WebSockets;
using BCrypt.Net;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using AngularDotNetEcommercial.Core.Interfaces;
using AngularDotNetEcommercial.Server.Services.Abstraction;
using Microsoft.EntityFrameworkCore;

namespace AngularDotNetEcommercial.Server.Services.Concreate
{
    public class CartItemService : ICartItemService
    {
        private readonly StoreContext _context;
        private readonly IGenericRepository<User> _userRepository;
        private readonly IMapper _autoMapper;
        private readonly IJwtUtils _jwtUtils;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public CartItemService(StoreContext context, IGenericRepository<User> userRepository, IMapper autoMapper, IJwtUtils jwtUtils, UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _context = context;
            _userRepository = userRepository;
            _autoMapper = autoMapper;
            _jwtUtils = jwtUtils;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public async Task CreateCartItem(CartItem cartItem)
        {
            if (cartItem == null)
            {
                return;
            }
            await _context.CartItem.AddAsync(cartItem);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateCartItem(CartItem cartItem)
        {
            if (cartItem == null)
            {
                // Trả về BadRequest nếu giỏ hàng không hợp lệ
                return;
            }

            // Cập nhật giỏ hàng trong cơ sở dữ liệu
            _context.CartItem.Update(cartItem);
            await _context.SaveChangesAsync();
        }

    }
}
