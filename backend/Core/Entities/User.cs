using AngularDotNetEcommercial.Core.BaseEntities;
using Microsoft.AspNetCore.Identity;
using System;

namespace AngularDotNetEcommercial.Core.Entities
{
    public class User: IdentityUser, IBaseEntity
    {
        //public string? Image { get; set; }
    }
}
