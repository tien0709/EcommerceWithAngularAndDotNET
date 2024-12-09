using AngularDotNetEcommercial.Core.Entities;
using AngularDotNetEcommercial.Core.Interfaces;
using AngularDotNetEcommercial.Backend.Infrastructure.Data;
using AngularDotNetEcommercial.Server.Dtos;
using AngularDotNetEcommercial.Server.Filters;
using AngularDotNetEcommercial.Server.Services;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using AngularDotNetEcommercial.Server.Services.Abstraction;

namespace AngularDotNetEcommercial.Server.Controllers
{
    [ApiController]
    //[CustomeAuthorization(["User","Admin"])]
    [Route("api/[controller]")]
    public class CartsController : Controller
    {

        private readonly IGenericRepository<CartItem> _cartItemReposity;
        private readonly IGenericRepository<Product> _productReposity;
        private readonly ICartService _cartService;
        private readonly IMapper _mapper;

        public CartsController(IGenericRepository<CartItem> cartItemReposity, IMapper mapper, ICartService cartService, IGenericRepository<Product> productReposity)
        {
            _cartItemReposity = cartItemReposity;
            _mapper = mapper;
            _cartService = cartService;
            _productReposity = productReposity;
        }

        // GET api/cart/{userId}
        [HttpGet]
        public async Task<IActionResult> GetCartByUserId()
        {
            var userId = HttpContext.Items["Id"] as string;

            var cart = await _cartService.GetCartItemsByUserIdAsync(userId!);

            if (cart == null )
            {
                return NotFound(new { Message = "No items found for this user." });
            }

            return Ok(cart);
        }

        [HttpPut("{productId}")]
        public async Task<IActionResult> AddItemToCart(string productId)
        {
            var userId = HttpContext.Items["Id"] as string;

            // Lấy giỏ hàng của người dùng từ dịch vụ
            var cart = await _cartService.GetCartItemsByUserIdAsync(userId);

            if (cart == null)
            {
                return BadRequest(new { message = "Giỏ hàng không hợp lệ" });
            }

            // Lấy sản phẩm từ kho
            var product = await _productReposity.GetByIdAsync(productId);
            if (product == null)
            {
                return NotFound(new { message = "Sản phẩm không tồn tại." });
            }

            // Kiểm tra nếu sản phẩm đã có trong giỏ hàng
            var existingItem = cart.Items.FirstOrDefault(item => item.ProductId == product.Id);

            if (existingItem != null)
            {
                // Nếu sản phẩm đã có trong giỏ hàng, chỉ cần tăng số lượng
                existingItem.Quantity += 1;
            }
            else
            {
                // Nếu sản phẩm chưa có trong giỏ hàng, thêm sản phẩm mới vào
                var newItem = new CartItem
                {
                    ProductId = product.Id,
                    CartId = cart.Id,
                    Quantity = 1, // Mặc định là 1 khi thêm lần đầu
                    Price = product.Price, // Lưu giá sản phẩm
                    Product = product, // Tham chiếu đến sản phẩm
                    CreateDate = DateTime.Now.ToString()
                };

                cart.Items.Add(newItem);
                await _cartItemReposity.AddAsync(newItem);

            }

            // Gọi phương thức UpdateCart để lưu lại giỏ hàng
            try {
                await _cartService.UpdateCart(cart);

                return Ok(new { message = "Cập nhật Cart thành công" });
            }
            catch(Exception ex) {
                return StatusCode(500, new { message = "Internal server error", error = ex.Message });
            }
        }
    }
}
