using AngularDotNetEcommercial.Core.Entities;
using AngularDotNetEcommercial.Server.Dtos;
using AngularDotNetEcommercial.Server.Services.Abstraction;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Data;

namespace AngularDotNetEcommercial.Server.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class AuthorizationController : Controller
    {
        private readonly IUserService _userService;

        public AuthorizationController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]//login mac đinh route la "" sau khi vo /authorization
        public async Task<IActionResult> Login(LoginDto rq)
        {
            try
            {
                var response = await _userService.Authenticate(rq);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = "Login failed.", Error = ex.Message });
            }
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterDto rq)
        {
            try
            {
                await _userService.Register(rq);
                return Ok(new { Message = "Registration successful!" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = "Registration failed.", Error = ex.Message });
            }
        }

        [HttpGet("getRole")]
        public IActionResult getRole()
        {
            var role = HttpContext.Items["Role"];
            var jsonRole = JsonConvert.SerializeObject(role);

            return Ok(new { Role = jsonRole });
        }

    }
}
