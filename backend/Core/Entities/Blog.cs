using AngularDotNetEcommercial.Core.BaseEntities;
using AngularDotNetEcommercial.Core.Entities;
using System;

namespace AngularDotNetEcommercial.Core.Entities
{
    public class Blog: BaseEntity
    {
        public string Title { get; set; } = null!;

        public string SourceImage { get; set; } = null!;

        public string Body { get; set; } = null!;

    }
}
