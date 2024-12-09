using AngularDotNetEcommercial.Core.Entities;
using AngularDotNetEcommercial.Core.Specification;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace AngularDotNetEcommercial.Backend.Infrastructure.Data
{
    public class ProductSpecification : BaseSpecification<Product>
    {
        public ProductSpecification(string? sort, string? CategoryId, int? page, int? pageSize)
            :base(x => string.IsNullOrEmpty(CategoryId) || CategoryId == "0" || x.CategoryId == CategoryId)
        {
            //AddIncludes(x=>x.ProductDiscounts);
                AddIncludes(x => x.Category);
            if (page.HasValue && pageSize.HasValue)
            {
                // Đảm bảo truyền vào giá trị kiểu int (không nullable)
                ApplyPaging((page.Value - 1) * pageSize.Value, 2*pageSize.Value);
            }
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

        public ProductSpecification(string ProductId) : base(x=>x.Id == ProductId)
        {
            //AddIncludes(x => x.ProductDiscounts);
            AddIncludes(x => x.Category);
        }
    }
}
