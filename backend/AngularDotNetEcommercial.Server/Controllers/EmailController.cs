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
using System.Net.Mail;
using System.Runtime.CompilerServices;
using System;
using Microsoft.Extensions.Hosting;

namespace AngularDotNetEcommercial.Server.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class EmailController : Controller
    {
        // GET: AbouController
        //private static readonly []

        private readonly IGenericRepository<User> _userReposity;
        private readonly IMapper _mapper;
        private readonly IConfiguration _configuration;

        public EmailController(IGenericRepository<User> userReposity, IMapper mapper, IConfiguration configuration)
        {
            _userReposity = userReposity;
            _mapper = mapper;
            _configuration= configuration;
        }

        [HttpPost]
        public async Task SendEmail([FromBody] EmailRequest emailRequest)
        {
            try
            {
                string id = HttpContext.Items["Id"] as string;
                var User = await _userReposity.GetByIdAsync(id!);

                var smtpClient = new SmtpClient("smtp.gmail.com")
                {
                    Port = 587,
                    Credentials = new System.Net.NetworkCredential(_configuration["Email:emailFrom"], _configuration["Email:pwApp"]),
                    EnableSsl = true
                };

                var mailMessage = new MailMessage
                {
                    From = new MailAddress("tien.phanbk@hcmut.edu.vn"),
                    Subject = emailRequest.Subject,
                    Body = emailRequest.Body,
                    IsBodyHtml = true
                };
                mailMessage.To.Add(User.Email);

                smtpClient.Send(mailMessage);
            }
            catch (Exception ex)
            {
                
            }
        }

    }
}
