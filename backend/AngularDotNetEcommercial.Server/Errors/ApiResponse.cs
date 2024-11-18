
namespace AngularDotNetEcommercial.Server.Errors
{
    public class ApiResponse
    {
        public ApiResponse(int statusCode, string message=null)
        {
            StatusCode = statusCode;
            Message = message??GetDefaultMessageForStatusCode(StatusCode);
        }

        public int StatusCode { get; set; }

        public string Message { get; set; } = null!;


        private string GetDefaultMessageForStatusCode(int statusCode)
        {
            return statusCode switch
            {
                400 => "Bad Request",
                401 => "You have not Authorize",
                404 => "Resource Not Found",
                500 => " Errors are the path to the dark side",
                 _  => ""
            };
        }
    }
}
