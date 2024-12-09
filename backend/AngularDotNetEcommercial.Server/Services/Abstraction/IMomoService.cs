using AngularDotNetEcommercial.Server.Dtos;
using AngularDotNetEcommercial.Server.Models;

namespace AngularDotNetEcommercial.Server.Services.Abstraction
{
    public interface IMomoService
    {
        Task<MomoCreatePaymentResponseModel> CreatePaymentAsync(OrderDto model);
        MomoExecuteResponseModel PaymentExecuteAsync(IQueryCollection collection);
    }
}
