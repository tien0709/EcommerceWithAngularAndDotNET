using System.ComponentModel.DataAnnotations;

namespace AngularDotNetEcommercial.Core.BaseEntities
{
    public abstract class BaseEntity : IBaseEntity
    {
        public virtual int Id { get; set; }

        public virtual string? CreateDate { get; set; }

        public virtual string? UpdateDate { get; set; }

        [Timestamp]
        public virtual byte[] RowVersion { get; set; } = null!;
    }
}
