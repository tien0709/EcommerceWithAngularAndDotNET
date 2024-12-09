using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AngularDotNetEcommercial.Core.BaseEntities
{
    public abstract class BaseEntity : IBaseEntity
    {
        [Key]  // Đánh dấu đây là khóa chính
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public virtual string Id { get; set; } 

        public virtual string? CreateDate { get; set; }

        public virtual string? UpdateDate { get; set; }

        [Timestamp]
        public virtual byte[] RowVersion { get; set; } = null!;
    }
}
