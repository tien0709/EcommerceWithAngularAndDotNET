using AngularDotNetEcommercial.Server.MiddleWare;

namespace AngularDotNetEcommercial.Server.Extensions
{
    public static class JwtMiddlewareExtensions
    {
        public static IApplicationBuilder UseJwtMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<JwtMiddleware>();
        }
    }
}

