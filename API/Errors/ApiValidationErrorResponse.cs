namespace API.Errors;
public class ApiValidationErrorResponse : ApiResponse
{
    #pragma warning disable CS8618
    
    public ApiValidationErrorResponse() : base(400)
    {

    }

    public IEnumerable<string> Errors {get; set;}
}