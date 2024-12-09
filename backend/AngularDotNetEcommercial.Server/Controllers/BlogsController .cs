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
    public class BlogsController : Controller
    {
        // GET: AbouController
        //private static readonly []

        private readonly IGenericRepository<Blog> _blogReposity;
        private readonly IMapper _mapper;

        public BlogsController(IGenericRepository<Blog> blogReposity, IMapper mapper)
        {
            _blogReposity = blogReposity;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<BlogDto>>> getBlogs(int? page, int? pageSize)
        {
            var spec = new BlogSpecification(page, pageSize);
            var Blogs = await _blogReposity.GetListAsync(spec);
            var blogDtos = Blogs.Select(blog => _mapper.Map<Blog, BlogDto>(blog)).ToList();
            return Ok(blogDtos);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<BlogDto>>> getBlog(string id)
        {
            var Blog = await _blogReposity.GetByIdAsync(id);
            var blogDtos = _mapper.Map<Blog, BlogDto>(Blog);
            return Ok(blogDtos);
        }

        [HttpPost]
        [CustomeAuthorization(["User", "Admin"])]
        public async Task<IActionResult> addBlog([FromBody] BlogDto blog)
        {
            try
            {
                var blog_convert = _mapper.Map<BlogDto, Blog>(blog);
                blog_convert.CreateDate = DateTime.Now.ToString();
                await _blogReposity.AddAsync(blog_convert);
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
        public async Task<IActionResult> updateBlog([FromBody] BlogDto blogDto)
        {
            try
            {
                // Kiểm tra xem sản phẩm có tồn tại hay không
                var blog = await _blogReposity.GetByIdAsync(blogDto.Id);

                if (blog == null)
                {
                    return NotFound(new { message = "Bài viết không tồn tại." });
                }

                blog.Title = blogDto.Title ;
                blog.SourceImage = blogDto.SourceImage;
                blog.Body = blogDto.Body;
                blog.UpdateDate = DateTime.Now.ToString();
                // Xóa sản phẩm
                await _blogReposity.UpdateAsync(blog);

                return Ok(new { message = "Xóa thành công." });
            }
            catch (Exception ex)
            {
                // Trả về mã lỗi 500 khi có lỗi xảy ra
                return StatusCode(500, new { message = $"Có lỗi xảy ra: {ex.Message}" });
            }
        }

        [HttpDelete("{id}")]
        [CustomeAuthorization(["User", "Admin"])]
        public async Task<IActionResult> deleteBlog(string id)
        {
            try
            {
                // Kiểm tra xem sản phẩm có tồn tại hay không
                var blog = await _blogReposity.GetByIdAsync(id);

                if (blog == null)
                {
                    return NotFound(new { message = "bài viết không tồn tại." });
                }

                // Xóa sản phẩm
                await _blogReposity.DeleteAsync(id.ToString());

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
