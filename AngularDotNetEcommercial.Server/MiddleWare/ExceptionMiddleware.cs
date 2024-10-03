using AngularDotNetEcommercial.Server.Errors;
using System.Linq.Expressions;
using System.Net;
using System.Runtime.CompilerServices;
using System.Text.Json;

namespace AngularDotNetEcommercial.Server.MiddleWare
{
    public class ExceptionMiddleware
    {
        private readonly IHostEnvironment _environment;
        private readonly ILogger<ExceptionMiddleware> _logger;
        private readonly RequestDelegate _requestDelegate;//xử lý các yêu cầu HTTP.

        public ExceptionMiddleware(IHostEnvironment environment, ILogger<ExceptionMiddleware> logger, RequestDelegate requestDelegate)
        {
            _environment = environment;
            _logger = logger;
            _requestDelegate = requestDelegate;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try{
                await _requestDelegate(context);
            }
            catch(Exception ex){
                _logger.LogError(ex, ex.Message);
                context.Response.ContentType = "application/json";
                context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                var response = _environment.IsDevelopment()?
                    new ApiException((int)HttpStatusCode.InternalServerError, ex.Message, 
                    ex.StackTrace.ToString()):
                    new ApiException((int)HttpStatusCode.InternalServerError);
                var json = JsonSerializer.Serialize(response);
                await context.Response.WriteAsync(json);

            }
        }
    }
}
