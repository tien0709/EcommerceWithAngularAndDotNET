using System.Threading;
using AngularDotNetEcommercial.Core.BaseEntities;

namespace AngularDotNetEcommercial.Core.Entities
{
    public class About: BaseEntity
    {
        public string AboutUs { get; set; } = null!;

        public string Feedback { get; set; } = null!;

        public string Career { get; set; } = null!;

        public string Colaboration { get; set; } = null!;

        public string UserId { get; set; } = null!;
        public User User { get; set; } = null!;

    }
}
