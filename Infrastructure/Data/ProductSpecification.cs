using AngularDotNetEcommercial.Core.Entities;
using AngularDotNetEcommercial.Core.Specification;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace AngularDotNetEcommercial.Infrastructure.Data
{
    public class ProductSpecification : BaseSpecification<Product>
    {
        public ProductSpecification(string? sort, int? CategoryId): base(
            x=>!CategoryId.HasValue||x.CategoryId == CategoryId)
        {
            //AddIncludes(x=>x.ProductDiscounts);
            AddIncludes(x => x.Category);
            if (!string.IsNullOrEmpty(sort))
            {
                switch (sort)
                {
                    case "priceAsc":
                        AddOrderby(p=>p.Price); break;

                    case "priceDesc":
                        AddOrderbyDescending(p => p.Price); break;

                    default:
                        AddOrderby(p => p.Name); break;
                }
            }else
            {
                AddOrderby(x => x.Name);
            }
        }

        public ProductSpecification(int id): base(x=>x.Id == id)
        {
            //AddIncludes(x => x.ProductDiscounts);
            AddIncludes(x => x.Category);
        }
    }
}
