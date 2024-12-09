using AngularDotNetEcommercial.Server.Dtos;
using AngularDotNetEcommercial.Server.Services.Abstraction;
using Azure;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;

namespace AngularDotNetEcommercial.Server.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class PaymentController : Controller
    {
        private IMomoService _momoService;
        //private readonly IVnPayService _vnPayService;
        private readonly HttpClient _httpClient;
        public PaymentController(IMomoService momoService, HttpClient httpClient )
        {
           
            _httpClient = httpClient;
            _momoService = momoService;
        }
        [HttpPost]
        //[Route("CreatePaymentUrl")]
        public async Task<IActionResult> CreatePaymentUrl([FromBody] OrderDto model)
        {
            var userId = HttpContext.Items["Id"] as string;
            var orderId = Guid.NewGuid().ToString();
            model.UserId = userId;
            model.Id = orderId;
            model.Email = "pttien";
            var response = await _momoService.CreatePaymentAsync(model);

            return Ok(new { url = response.PayUrl });
        }

    }
}
