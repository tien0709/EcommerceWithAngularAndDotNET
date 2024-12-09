using AngularDotNetEcommercial.Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace AngularDotNetEcommercial.Server.Filters
{
    [AttributeUsage(AttributeTargets.Class| AttributeTargets.Method)]
    public class CustomeAuthorizationAttribute: Attribute, IAuthorizationFilter
    {
        private readonly string[] _roles;

        public CustomeAuthorizationAttribute(string[] roles)
        {
            _roles = roles;
        }

        public void OnAuthorization(AuthorizationFilterContext context)
        {
            var user = context.HttpContext.Items["User"];
            var role = context.HttpContext.Items["Role"];
            // not Authenticated
            if (user == null)
            {
                context.Result = new JsonResult(new { message = "UnAuthorized" })
                {
                    StatusCode = StatusCodes.Status401Unauthorized
                };
                return;
            }
            // Role not authorized
            if (_roles != null && _roles.Any() && !_roles.Contains(role))
            {
                
                context.Result = new JsonResult(new { message = "Forbidden" })
                {
                    StatusCode = StatusCodes.Status403Forbidden
                };
                return;
            }
        }
    }
}
