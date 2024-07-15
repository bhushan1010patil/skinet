namespace API.Errors;
public class ApiException : ApiResponse
{
    #pragma warning disable CS8625
    public ApiException(int statusCode, string message = null, string details = null) : base(statusCode, message)
    {
        Details = details;
    }

    public string Details {get; set;}
}