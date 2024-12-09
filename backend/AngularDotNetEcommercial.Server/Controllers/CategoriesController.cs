using AngularDotNetEcommercial.Backend.Infrastructure.Data;
using AngularDotNetEcommercial.Core.Entities;
using AngularDotNetEcommercial.Core.Interfaces;
using AngularDotNetEcommercial.Server.Dtos;
using AngularDotNetEcommercial.Server.Errors;
using AutoMapper;
using Infrastructure.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularDotNetEcommercial.Server.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class CategoriesController : Controller
    {
        private readonly IGenericRepository<Category> _categoryReposity;
        private readonly IMapper _mapper;

        public CategoriesController(IGenericRepository<Category> categoryReposity, IMapper mapper)
        {
            _categoryReposity = categoryReposity;
            _mapper = mapper;
        }
        [HttpGet]
        public async Task<ActionResult<List<CategoryDto>>> getCategories()
        {
            var spec = new CategorySpecification();
            var Categories = await _categoryReposity.GetListAsync(spec);
            var categoryDtos = Categories.Select(category => _mapper.Map<Category, CategoryDto>(category)).ToList();
            return Ok(categoryDtos);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CategoryDto>> getCategory(string id)
        {
            var spec = new CategorySpecification();
            var Category = await _categoryReposity.GetEntityWithSpecAsync(spec);
            if (Category == null)
            {
                return NotFound(new ApiResponse(404));
            }
            return _mapper.Map<Category, CategoryDto>(Category);
        }
    }
}
