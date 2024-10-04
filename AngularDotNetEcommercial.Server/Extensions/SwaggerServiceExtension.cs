namespace AngularDotNetEcommercial.Server.Extensions
{
    public static class SwaggerServiceExtension
    {
        public static IServiceCollection AddSwaggerDocumentions(this IServiceCollection services)
        {
            services.AddSwaggerGen(c =>
            c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "EShop Api", Version = "v1" }));
            return services;
        }

        public static IApplicationBuilder UseSwaggerDocumention(this IApplicationBuilder app)
        {
            app.UseSwagger();
            app.UseSwaggerUI(
                c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "EShop v1");
                }
            );
            return app;
        }
    }
}
