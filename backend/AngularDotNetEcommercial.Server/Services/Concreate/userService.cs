using AngularDotNetEcommercial.Core.Entities;
using AngularDotNetEcommercial.Backend.Infrastructure.Data;
using AngularDotNetEcommercial.Server.Dtos;
using AngularDotNetEcommercial.Server.Errors;
using AngularDotNetEcommercial.Server.Utils;
using AutoMapper;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.IdentityModel.Tokens;
using System.Net.WebSockets;
using BCrypt.Net;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using AngularDotNetEcommercial.Core.Interfaces;
using AngularDotNetEcommercial.Server.Services.Abstraction;

namespace AngularDotNetEcommercial.Server.Services.Concreate
{
    public class UserService : IUserService
    {
        private readonly StoreContext _context;
        private readonly IGenericRepository<User> _genericRepository;
        private readonly IMapper _autoMapper;
        private readonly IJwtUtils _jwtUtils;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public UserService(StoreContext context, IGenericRepository<User> genericRepository, IMapper autoMapper, IJwtUtils jwtUtils, UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _context = context;
            _genericRepository = genericRepository;
            _autoMapper = autoMapper;
            _jwtUtils = jwtUtils;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public async Task<LoginResponseDto> Authenticate(LoginDto model)
        {
            // Tìm người dùng theo tên đăng nhập
            var user = await _userManager.FindByNameAsync(model.UserName);
            if (user == null)
            {
                throw new Exception("Invalid username or password.");
            }

            // Kiểm tra mật khẩu
            var isPasswordValid = await _userManager.CheckPasswordAsync(user, model.Password);
            if (!isPasswordValid)
            {
                throw new Exception("Invalid username or password.");
            }

            // Lấy thông tin role của người dùng
            var roles = await _userManager.GetRolesAsync(user);
            var role = roles.FirstOrDefault().ToString();

            // Tạo JWT token
            var token = _jwtUtils.GenerateToken(user, role);
            var userName = user.UserName;
            var response = new LoginResponseDto
            {
                UserName = userName,
                Token = token
            };

            // Trả về response JSON
            return response;
        }


        public async Task<IEnumerable<User>> GetAll()
        {
            return await _genericRepository.GetAllAsync();
        }
        public async Task<User> GetById(string id)
        {

            return await _genericRepository.GetByIdAsync(id);
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

        public void Update(int id, User model) { }
        public void Delete(int id) { }
    }
}
