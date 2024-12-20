﻿using AngularDotNetEcommercial.Core.BaseEntities;
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

        public async Task<T> GetEntityWithSpecAsync(ISpecification<T> spec)
        {
            return await ApplySpecification(spec).FirstOrDefaultAsync();
        }

        public async Task<IReadOnlyList<T>> GetListAsync(ISpecification<T> spec)
        {
            return await ApplySpecification(spec).ToListAsync();
        }

        public IQueryable<T> ApplySpecification(ISpecification<T> specification)
        {
            return SpecificationEvaluator<T>.GetQuery(_context.Set<T>().AsQueryable(), specification);
        }
    }
}
