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
                .ForMember(d => d.ProductDiscounts, o => o.MapFrom(s => s.ProductDiscounts.Select(g => g.DiscountId))).ReverseMap();
            CreateMap<RegisterDto, User>().ReverseMap();
            CreateMap<LoginResponseDto, User>().ReverseMap();
            CreateMap<Category, CategoryDto>().ReverseMap();
            CreateMap<About, AboutDto>().ReverseMap();
            CreateMap<Contact, ContactDto>().ReverseMap();
            CreateMap<Blog, BlogDto>().ForMember(dest => dest.UpdateDate, opt => opt.MapFrom(src => src.CreateDate ?? src.UpdateDate)).ReverseMap();
            CreateMap<CartItem, CartItemDto>().ReverseMap();
            CreateMap<User, UserDto>().ReverseMap();
        }
    }
}
