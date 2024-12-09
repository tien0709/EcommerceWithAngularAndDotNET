using AngularDotNetEcommercial.Core.Entities;
using AngularDotNetEcommercial.Server.Dtos;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace AngularDotNetEcommercial.Server.Services.Abstraction
{
    public interface IUserService : IGenericService<User>
    {
        Task<LoginResponseDto> AuthenticateAsync(LoginDto model);

        Task<string> GetUserRoleAsync(string userId);

        Task RegisterAsync(RegisterDto model, string id);

        Task<User> GetByIdAsync(string id);

    }
}
