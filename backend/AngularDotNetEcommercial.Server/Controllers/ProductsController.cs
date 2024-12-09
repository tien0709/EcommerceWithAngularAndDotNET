using AngularDotNetEcommercial.Core.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularDotNetEcommercial.Core.Interfaces;
using System.Net.WebSockets;
using AngularDotNetEcommercial.Backend.Infrastructure.Data;
using AutoMapper;
using AngularDotNetEcommercial.Server.Dtos;
using AngularDotNetEcommercial.Server.Errors;
using AngularDotNetEcommercial.Server.Filters;

namespace AngularDotNetEcommercial.Server.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class ProductsController : Controller
    {
        // GET: ProductsController
        //private static readonly []

        private readonly IGenericRepository<Product> _productReposity;
        private readonly IMapper _mapper;

        public ProductsController(IGenericRepository<Product> productReposity, IMapper mapper)
        {
            _productReposity = productReposity;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<ProductDto>>> getProducts(string? sort, string? CategoryId, int? page, int? pageSize)
        {
            var spec = new ProductSpecification(sort, CategoryId, page, pageSize);
            var Products = await _productReposity.GetListAsync(spec);
            var productDtos = Products.Select(product => _mapper.Map<Product, ProductDto>(product)).ToList();
            return Ok(productDtos);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ProductDto>> getProduct(string id)
        {
            var spec = new ProductSpecification(id);
            var Product = await _productReposity.GetEntityWithSpecAsync(spec);
            if (Product == null)
            {
                return NotFound(new ApiResponse(404));
            }
            var ProductDto = _mapper.Map<Product, ProductDto>(Product);
            return ProductDto;
        }

        [HttpDelete("{id}")]
        [CustomeAuthorization(["User", "Admin"])]
        public async Task<IActionResult> deleteProduct(string id)
        {
            try
            {
                // Kiểm tra xem sản phẩm có tồn tại hay không
                var product = await _productReposity.GetByIdAsync(id); 

                if (product == null)
                {
                    return NotFound(new { message = "Sản phẩm không tồn tại." });
                }

                // Xóa sản phẩm
                await _productReposity.DeleteAsync(id.ToString());

                return Ok(new { message = "Xóa thành công." });
            }
            catch (Exception ex)
            {
                // Trả về mã lỗi 500 khi có lỗi xảy ra
                return StatusCode(500, new { message = $"Có lỗi xảy ra: {ex.Message}" });
            }
        }

        [HttpPost]
        [CustomeAuthorization(["User", "Admin"])]
        public async Task<IActionResult> addProduct([FromBody] ProductDto product)
        {
            try
            {
                var product_convert = _mapper.Map<ProductDto, Product>(product);
                product_convert.CreateDate = DateTime.Now.ToString();
                await _productReposity.AddAsync(product_convert);
                return Ok(new { message = "Thêm thành công." });
            }
            catch (Exception ex)
            {
                // Trả về mã lỗi 500 khi có lỗi xảy ra
                return StatusCode(500, new { message = $"Có lỗi xảy ra: {ex.Message}" });
            }
        }

        [HttpPut]
        [CustomeAuthorization(["User", "Admin"])]
        public async Task<IActionResult> updateProduct([FromBody] ProductDto productDto)
        {
            try
            {
                // Kiểm tra xem sản phẩm có tồn tại hay không
                var product = await _productReposity.GetByIdAsync(productDto.Id);

                if (product == null)
                {
                    return NotFound(new { message = "Sản phẩm không tồn tại." });
                }

                product.Price = productDto.Price;
                product.Quantity = productDto.Quantity;
                product.CategoryId = productDto.CategoryId;
                product.ImageUrl = productDto.ImageUrl;
                product.Name = productDto.Name;
                product.Description = productDto.Description;
                product.UpdateDate = DateTime.Now.ToString();
                // Xóa sản phẩm
                await _productReposity.UpdateAsync(product);

                return Ok(new { message = "Xóa thành công." });
            }
            catch (Exception ex)
            {
                // Trả về mã lỗi 500 khi có lỗi xảy ra
                return StatusCode(500, new { message = $"Có lỗi xảy ra: {ex.Message}" });
            }
        }
    }
}
