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
    public class ContactController : Controller
    {
        // GET: ProductsController
        //private static readonly []

        private readonly IGenericRepository<Contact> _contactReposity;
        private readonly IMapper _mapper;

        public ContactController(IGenericRepository<Contact> contactReposity, IMapper mapper)
        {
            _contactReposity = contactReposity;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<ContactDto>>> getContact()
        {
            var spec = new ContactSpecification();
            var Contact = await _contactReposity.GetListAsync(spec);
            var ContactDtos = Contact.Select(contact => _mapper.Map<Contact, ContactDto>(contact)).ToList();
            return Ok(ContactDtos);
        }

        [HttpPut]
        [CustomeAuthorization(["User", "Admin"])]
        public async Task<IActionResult> EditListAsync([FromBody] ContactDto contactDtos)
        {
            if (contactDtos == null)
            {
                return BadRequest("Dữ liệu cập nhật không hợp lệ.");
            }

            try
            {

                var existingContact = (await _contactReposity.GetAllAsync()).FirstOrDefault();
                if (existingContact != null)
                {
                    // Cập nhật các trường của đối tượng về cơ sở dữ liệu
                    existingContact.Address = contactDtos.Address;
                    existingContact.PhoneNumber = contactDtos.PhoneNumber;
                    existingContact.EmailCustomerSupport = contactDtos.EmailCustomerSupport;
                    existingContact.Timeline = contactDtos.Timeline;
                    existingContact.UpdateDate = DateTime.Now.ToString();

                    // Lưu cập nhật
                    await _contactReposity.UpdateAsync(existingContact);
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
