using AngularDotNetEcommercial.Core.BaseEntities;
using AngularDotNetEcommercial.Core.Entities;
using AngularDotNetEcommercial.Core.Specification;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularDotNetEcommercial.Core.Interfaces
{
    public interface IGenericRepository<T> where T : IBaseEntity
    {
        Task<T> GetByIdAsync(string id);

        Task UpdateAsync(T item);

        Task AddAsync(T item);

        Task DeleteAsync(string id);

        Task<IReadOnlyList<T>> GetAllAsync();
        Task<T> GetEntityWithSpecAsync(ISpecification<T> spec);
        Task<IReadOnlyList<T>> GetListAsync(ISpecification<T> spec);

        //IQueryable<T> ApplySpecification(ISpecification<T> specification);
    }


}
