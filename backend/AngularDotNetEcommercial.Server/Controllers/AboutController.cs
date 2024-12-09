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
    public class AboutController : Controller
    {
        // GET: AbouController
        //private static readonly []

        private readonly IGenericRepository<About> _aboutReposity;
        private readonly IMapper _mapper;

        public AboutController(IGenericRepository<About> aboutReposity, IMapper mapper)
        {
            _aboutReposity = aboutReposity;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<AboutDto>>> getAbout()
        {
            var spec = new AboutSpecification();
            var Abouts = await _aboutReposity.GetListAsync(spec);
            var aboutDtos = Abouts.Select(about => _mapper.Map<About, AboutDto>(about)).ToList();
            return Ok(aboutDtos);
        }


        [HttpPut]
        [CustomeAuthorization(["User", "Admin"])]
        public async Task<IActionResult> EditListAsync([FromBody] AboutDto aboutDtos)
        {
            if (aboutDtos == null)
            {
                return BadRequest("Dữ liệu cập nhật không hợp lệ.");
            }

            try
            {

                    var existingAbout = (await _aboutReposity.GetAllAsync()).FirstOrDefault();
                if (existingAbout != null)
                    {
                        // Cập nhật các trường của đối tượng về cơ sở dữ liệu
                        existingAbout.AboutUs = aboutDtos.AboutUs;
                        existingAbout.Feedback = aboutDtos.Feedback;
                        existingAbout.Colaboration = aboutDtos.Colaboration;
                        existingAbout.Career = aboutDtos.Career;
                        existingAbout.UpdateDate = DateTime.Now.ToString();

                        // Lưu cập nhật
                        await _aboutReposity.UpdateAsync(existingAbout);
                    }

                return Ok(new { message = "Cập nhật thành công." });
            }
            catch (Exception ex)
            {

                return StatusCode(500, $"Có lỗi xảy ra: {ex.Message}");
            }
        }

    }
}
