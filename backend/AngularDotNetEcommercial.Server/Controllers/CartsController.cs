using AngularDotNetEcommercial.Core.Entities;
using AngularDotNetEcommercial.Core.Interfaces;
using AngularDotNetEcommercial.Backend.Infrastructure.Data;
using AngularDotNetEcommercial.Server.Dtos;
using AngularDotNetEcommercial.Server.Filters;
using AngularDotNetEcommercial.Server.Services;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace AngularDotNetEcommercial.Server.Controllers
{
    [ApiController]
    //[CustomeAuthorization(["User", "Admin"])]
    [Route("api/[controller]")]
    public class CartsController : Controller
    {

        private readonly IGenericRepository<CartItem> _cartReposity;
        private readonly IMapper _mapper;

        public CartsController(IGenericRepository<CartItem> cartReposity, IMapper mapper)
        {
            _cartReposity = cartReposity;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetProductInCarts(string? sort)
        {

            // Lấy thông tin người dùng từ HttpContext.Items
            var user = HttpContext.Items["User"] as User;

            // Kiểm tra xem người dùng có hợp lệ không
            if (user == null)
            {
                return Unauthorized(new { message = "You must be logged in to view products." });
            }

            // Nếu có, tiếp tục lấy danh sách sản phẩm
            var spec = new CartSpecification();
            var Carts = await _cartReposity.GetListAsync(spec);
            var CartDtos = Carts.Select(cart => _mapper.Map<CartItem, CartItemDto>(cart)).ToList();
            return Ok(CartDtos);
        }
    }
}
