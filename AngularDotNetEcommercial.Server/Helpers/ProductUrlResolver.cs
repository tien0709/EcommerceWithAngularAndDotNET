using AngularDotNetEcommercial.Core.Entities;
using AngularDotNetEcommercial.Server.Dtos;
using AutoMapper;
using AutoMapper.Execution;

namespace AngularDotNetEcommercial.Server.Helpers
{
    public class ProductUrlResolver : IValueResolver<Product, ProductDto, string>
        //class implement a mapping property:( mapping a property (type string) of ProductDto from a property of Product)  
    {
        private readonly IConfiguration _configuration;

        public ProductUrlResolver(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string Resolve(Product source, ProductDto destination, string destMember,
            ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.ImageUrl))
            {
                return _configuration["ApiUrl"] + source.ImageUrl;
            }
            return "";
        }
    }
}
