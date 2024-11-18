using AngularDotNetEcommercial.Server.Filters;
using Microsoft.AspNetCore.Mvc;

namespace AngularDotNetEcommercial.Server.Controllers
{
    [CustomeAuthorization(["Admin"])]
    [ApiController]
    [Route("api/[controller]")]
    public class AdminController : Controller
    {
    }
}
