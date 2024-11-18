using AngularDotNetEcommercial.Core.Entities;
using AngularDotNetEcommercial.Server.Dtos;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace AngularDotNetEcommercial.Server.Services.Abstraction
{
    public interface IUserService : IGenericService<User>
    {
        Task<LoginResponseDto> Authenticate(LoginDto model);

        Task<string> GetUserRoleAsync(string userId);

        Task Register(RegisterDto model);

    }
}
