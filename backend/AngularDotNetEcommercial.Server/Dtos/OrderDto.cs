using AngularDotNetEcommercial.Core.Entities;
using Microsoft.AspNetCore.Mvc;

namespace AngularDotNetEcommercial.Server.Dtos
{
    public class OrderDto
    {
        public string Id { get; set; }
        public string UserId { get; set; } 

        public string Email { get; set; } 

        public string Address { get; set; }

        public float Total { get; set; }

    }
}
