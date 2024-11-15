using AngularDotNetEcommercial.Server.Filters;
using Microsoft.AspNetCore.Mvc;

namespace AngularDotNetEcommercial.Server.Controllers
{
    [ApiController]
    [CustomeAuthorization(["User", "Admin"])]
    [Route("api/[controller]")]
    public class CartController : Controller
    {
    }
}
