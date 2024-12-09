using AngularDotNetEcommercial.Core.Entities;
using AngularDotNetEcommercial.Core.Interfaces;
using AngularDotNetEcommercial.Server.Dtos;
using AngularDotNetEcommercial.Server.Services.Abstraction;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Data;

namespace AngularDotNetEcommercial.Server.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class AuthorizationController : Controller
    {
        private readonly IUserService _userService;
        private readonly IGenericRepository<Cart> _cartReposity;

        public AuthorizationController(IUserService userService, IGenericRepository<Cart> cartReposity)
        {
            _userService = userService;
            _cartReposity = cartReposity;
        }

        [HttpPost]//login mac đinh route la "" sau khi vo /authorization
        public async Task<IActionResult> Login(LoginDto rq)
        {
            try
            {
                var response = await _userService.AuthenticateAsync(rq);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = "Đăng nhập thất bại. Email hoặc mật khẩu không hợp lệ", Error = ex.Message });
            }
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterDto rq)
        {
            try
            {
                var id = Guid.NewGuid().ToString();
                // Đăng ký người dùng
                await _userService.RegisterAsync(rq, id);


                // Tạo giỏ hàng mới cho người dùng
                var cart = new Cart
                {
                    UserId = id,  // Liên kết giỏ hàng với userId
                    Items = new List<CartItem>() , // Khởi tạo danh sách mục trong giỏ hàng
                    CreateDate = DateTime.Now.ToString()
                };

                // Lưu giỏ hàng mới vào cơ sở dữ liệu
                await _cartReposity.AddAsync(cart);

                // Trả về thông báo đăng ký thành công
                return Ok(new { Message = "Đăng ký thành công!" });
            }
            catch (Exception ex)
            {
                // Xử lý lỗi và trả về thông báo thất bại
                return BadRequest(new { Message = "Đăng ký thất bại.", Error = ex.Message });
            }
        }


        [HttpGet("getRole")]
        public IActionResult getRole()
        {
            // call to controller, before message arive controller=> it be processed by Jwt Middleware=>>exact role from jwwt and pass it to context
            var role = HttpContext.Items["Role"];//jwwt  be processs before this statement
            var jsonRole = JsonConvert.SerializeObject(role);

            return Ok(new { Role = jsonRole });
        }

    }
}
