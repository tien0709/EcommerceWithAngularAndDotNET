using AngularDotNetEcommercial.Core.Entities;
using AngularDotNetEcommercial.Server.Dtos;

namespace AngularDotNetEcommercial.Server.Services.Abstraction
{
    public interface IGenericService<T>
    {
        Task<IEnumerable<T>> GetAll();
        Task<T> GetById(string id);

        void Update(int id, T model);
        void Delete(int id);
    }
}
