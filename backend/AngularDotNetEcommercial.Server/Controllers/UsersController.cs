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
    public class UsersController : Controller
    {
        // GET: AbouController
        //private static readonly []

        private readonly IGenericRepository<User> _userReposity;
        private readonly IMapper _mapper;

        public UsersController(IGenericRepository<User> userReposity, IMapper mapper)
        {
            _userReposity = userReposity;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<UserDto>>> getUsers()
        {
            var spec = new UserSpecification();
            var Users = await _userReposity.GetListAsync(spec);
            var userDtos = Users.Select(user => _mapper.Map<User, UserDto>(user)).ToList();
            return Ok(userDtos);
        }

    }
}
