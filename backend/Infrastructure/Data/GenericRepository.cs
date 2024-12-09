using AngularDotNetEcommercial.Core.BaseEntities;
using AngularDotNetEcommercial.Backend.Infrastructure.Data;
using AngularDotNetEcommercial.Core.Specification;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using AngularDotNetEcommercial.Core.Interfaces;
namespace AngularDotNetEcommercial.Backend.Infrastructure.Data
{
    public class GenericRepository<T>: IGenericRepository<T> where T : class, IBaseEntity// phai la class va ke thua tu IBaseEntity
    {
        private readonly StoreContext _context;

        public GenericRepository(StoreContext context)
        {
            _context = context;
        }

        public async Task<T> GetByIdAsync(string id)
        {
            return await _context.Set<T>().FindAsync(id);
        }

        public async Task<IReadOnlyList<T>> GetAllAsync()
        {
            return await _context.Set<T>().ToListAsync();
        }

        public async Task UpdateAsync(T entity)
        {
            try
            {
                if (entity == null)
                {
                    throw new ArgumentNullException(nameof(entity), "Entity không được null.");
                }

                _context.Set<T>().Update(entity);

                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("Cập nhật không thành công.", ex);
            }
        }

        public async Task AddAsync(T entity)
        {
            try
            {
                if (entity == null)
                {
                    throw new ArgumentNullException(nameof(entity), "Entity không được null.");
                }


                await _context.Set<T>().AddAsync(entity);


                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("Thêm đối tượng không thành công.", ex);
            }
        }

        public async Task DeleteAsync(string id)
        {
            try
            {

                var entity = await _context.Set<T>().FindAsync(id);


                if (entity == null)
                {
                    throw new InvalidOperationException($"Không tìm thấy đối tượng với ID {id}");
                }


                _context.Set<T>().Remove(entity);


                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("Xóa đối tượng không thành công.", ex);
            }
        }


        public async Task<T> GetEntityWithSpecAsync(ISpecification<T> spec)
        {
            return await ApplySpecification(spec).FirstOrDefaultAsync();
        }

        public async Task<IReadOnlyList<T>> GetListAsync(ISpecification<T>? spec)
        {
            return await ApplySpecification(spec).ToListAsync();
        }

        public IQueryable<T> ApplySpecification(ISpecification<T> specification)
        {
            return SpecificationEvaluator<T>.GetQuery(_context.Set<T>().AsQueryable(), specification);
        }
    }
}
