using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace AngularDotNetEcommercial.Server.Dtos
{
    public class FileUploadDto
    {
        [Required(ErrorMessage = "The file field is required.")]
        public IFormFile file { get; set; }

        [Required(ErrorMessage = "The directory field is required.")]
        public string directory { get; set; }
    }
}
