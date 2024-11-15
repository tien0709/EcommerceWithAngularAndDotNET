using AngularDotNetEcommercial.Core.Entities;
using AngularDotNetEcommercial.Server.Dtos;
using AutoMapper;

namespace AngularDotNetEcommercial.Server.Helpers
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Product, ProductDto>()
                .ForMember(d => d.Category, o => o.MapFrom(s => s.Category.Name))
                .ForMember(d => d.ProductDiscounts, o => o.MapFrom(s => s.ProductDiscounts.Select(g => g.DiscountId)))
                .ForMember(d=>d.ImageUrl, o=>o.MapFrom<ProductUrlResolver>());
            CreateMap<RegisterDto, User>().ReverseMap();
            CreateMap<LoginResponseDto, User>().ReverseMap();
        }
    }
}
