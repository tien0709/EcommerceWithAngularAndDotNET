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
    public class CartService : ICartService
    {
        private readonly StoreContext _context;
        private readonly IGenericRepository<User> _userRepository;
        private readonly IMapper _autoMapper;
        private readonly IJwtUtils _jwtUtils;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public CartService(StoreContext context, IGenericRepository<User> userRepository, IMapper autoMapper, IJwtUtils jwtUtils, UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _context = context;
            _userRepository = userRepository;
            _autoMapper = autoMapper;
            _jwtUtils = jwtUtils;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public async Task<Cart> GetCartItemsByUserIdAsync(string userId)
        {
            // Lấy Cart của người dùng theo UserId
            var cart = await _context.Cart
                .Where(c => c.UserId == userId)
                .Include(c => c.Items) // Include các CartItems của Cart
                .ThenInclude(ci => ci.Product)
                .FirstOrDefaultAsync();
            return cart;
        }

        public async Task UpdateCart(Cart cart)
        {
            try
            {
                // Kiểm tra nếu giỏ hàng null
                if (cart == null)
                {
                    // Trả về BadRequest nếu giỏ hàng không hợp lệ
                    return;
                }

                // Cập nhật giỏ hàng trong cơ sở dữ liệu
                _context.Cart.Update(cart);
                await _context.SaveChangesAsync();

                // Trả về Ok với giỏ hàng đã cập nhật
                return;
            }
            catch (Exception ex)
            {
                // Nếu có lỗi xảy ra, trả về lỗi server với mã trạng thái 500
                return;
            }
        }

        // Hàm lưu giỏ hàng
        public async Task SaveAsync(Cart cart)
        {
            _context.Cart.Update(cart);
            await _context.SaveChangesAsync();
        }

    }
}
