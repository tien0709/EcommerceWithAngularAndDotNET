using Microsoft.AspNetCore.Identity;
using System;

namespace AngularDotNetEcommercial.Core.Entities
{
    public class User: IdentityUser
    {
        public string Image { get; set; } = null!;
    }
}
