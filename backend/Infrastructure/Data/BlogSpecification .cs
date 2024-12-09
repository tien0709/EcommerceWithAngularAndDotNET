using AngularDotNetEcommercial.Core.Entities;
using AngularDotNetEcommercial.Core.Specification;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace AngularDotNetEcommercial.Backend.Infrastructure.Data
{
    public class BlogSpecification : BaseSpecification<Blog>
    {
        public BlogSpecification(int? page, int? pageSize)
        {
            //AddIncludes(x=>x.ProductDiscounts);
            if (page.HasValue && pageSize.HasValue)
            {
                // Đảm bảo truyền vào giá trị kiểu int (không nullable)
                ApplyPaging((page.Value - 1) * pageSize.Value, 2*pageSize.Value);
            }

                AddOrderby(x => x.CreateDate);

        }

        public BlogSpecification(string id): base(x=>x.Id == id)
        {
            //AddIncludes(x => x.ProductDiscounts);
        }
    }
}
