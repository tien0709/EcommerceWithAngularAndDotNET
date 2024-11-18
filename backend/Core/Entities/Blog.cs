using AngularDotNetEcommercial.Core.BaseEntities;
using AngularDotNetEcommercial.Core.Entities;
using System;

namespace AngularDotNetEcommercial.Core.Entities
{
    public class Blog: BaseEntity
    {
        public string Title { get; set; } = null!;

        public string Body { get; set; } = null!;

        public string UserId { get; set; } = null!;
        public User User { get; set; } = null!;

    }
}
