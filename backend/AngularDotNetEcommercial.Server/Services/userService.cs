using AngularDotNetEcommercial.Core.Entities;
using AngularDotNetEcommercial.Infrastructure.Data;
using AngularDotNetEcommercial.Server.Dtos;
using AngularDotNetEcommercial.Server.Errors;
using AngularDotNetEcommercial.Server.Utils;
using AutoMapper;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.IdentityModel.Tokens;
using System.Net.WebSockets;
using BCrypt.Net;
using Microsoft.AspNetCore.Identity;

namespace AngularDotNetEcommercial.Server.Services
{
    public interface IUserService
    {
        IEnumerable<User> GetAll();
        User GetById(string id);

        Task<string> GetUserRoleAsync(string userId);
        Task Register(RegisterDto model);
        //void Update(int id, UpdateRequest model);
        //void Delete(int id);
    }

    public class UserService: IUserService
    {
        private readonly StoreContext _context;
        private readonly IMapper _autoMapper;
        private readonly IJwtUtils _jwtUtils;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public UserService(StoreContext context, IMapper autoMapper, IJwtUtils jwtUtils, UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _context = context;
            _autoMapper = autoMapper;
            _jwtUtils = jwtUtils;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public IEnumerable<User> GetAll()
        {
            return _context.Users;
        }
        public User GetById(string id)
        {
            return _context.Users.FirstOrDefault(x => x.Id == id);
        }

        public async Task<string> GetUserRoleAsync(string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);
            if (user != null)
            {
                var roles = await _userManager.GetRolesAsync(user);
                return roles.FirstOrDefault(); // Assuming a user has only one role
            }
            return null;
        }

        public async Task Register(RegisterDto model)
        {
            if (_context.Users.Any(x => x.UserName == model.UserName))
            {
                throw new Exception($"Username {model.UserName} already exists.");
            }

            var user = _autoMapper.Map<User>(model);

            var userCreateResult = await _userManager.CreateAsync(user, model.Password);
            if (!userCreateResult.Succeeded)
            {
                // Tạo lỗi mô tả từ kết quả
                throw new Exception(string.Join(", ", userCreateResult.Errors.Select(e => e.Description)));
            }

            var assignRoleResult = await _userManager.AddToRoleAsync(user, "User");
            if (!assignRoleResult.Succeeded)
            {
                await _userManager.DeleteAsync(user);
                throw new Exception(string.Join(", ", assignRoleResult.Errors.Select(e => e.Description)));
            }
        }

        //void Update(int id, UpdateRequest model);
        //void Delete(int id);
    }
}
