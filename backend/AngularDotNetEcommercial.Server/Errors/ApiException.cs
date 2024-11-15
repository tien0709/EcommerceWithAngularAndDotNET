namespace AngularDotNetEcommercial.Server.Errors
{
    public class ApiException : ApiResponse
    {
        public ApiException(int statusCode, string message = null, string Details = null) : base(statusCode, message)
        {
            details = Details;
        }

        public string details;
    }
}
