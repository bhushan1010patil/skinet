namespace Core.Entities;

public class CustomerBasket
{
    #pragma warning disable CS8618
    public CustomerBasket()
    {

    }

    public CustomerBasket(string id)
    {
        Id = id;
    }

    public string Id { get; set; }
    public List<BasketItem> Items { get; set; } = new List<BasketItem>();
}