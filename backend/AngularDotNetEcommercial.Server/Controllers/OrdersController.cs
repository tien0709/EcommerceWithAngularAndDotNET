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
    public class OrdersController : Controller
    {

        private readonly IGenericRepository<OrderItems> _orderItemReposity;
        private readonly IGenericRepository<Product> _productReposity;
        private readonly ICartService _cartService;
        private readonly IMapper _mapper;
        private IMomoService _momoService;

        public OrdersController(IMomoService momoService, IGenericRepository<OrderItems> orderItemReposity, IMapper mapper, ICartService cartService, IGenericRepository<Product> productReposity)
        {
            _orderItemReposity = orderItemReposity;
            _mapper = mapper;
            _cartService = cartService;
            _productReposity = productReposity;
            _momoService = momoService;
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

        /*[HttpPost]
        public async Task<IActionResult> AddOrder(string productId)
        {
            var userId = HttpContext.Items["Id"] as string;

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
        }*/

        /*[HttpGet]
        public async Task<IActionResult> PaymentCallBack([FromBody] OrderDto model)
        {
            var response = _momoService.PaymentExecuteAsync(HttpContext.Request.Query);
            return Ok(response);
        }*/
    }
}
