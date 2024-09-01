using Microsoft.AspNetCore.Identity;

namespace Core.Entities.Identity;
public class AppUser : IdentityUser 
{
    #pragma warning disable CS8618
    public string DisplayName { get; set; }
    public Address Address { get; set; }
}

