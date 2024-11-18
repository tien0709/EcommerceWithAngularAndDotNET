using AngularDotNetEcommercial.Core.Entities;

namespace AngularDotNetEcommercial.Server.Helpers
{
    public static class HttpContextExtension
    {
        public static User GetCurrentUser(this HttpContext context)
        {
            return (User)context.Items["User"];
        }
    }
}
