
using core.Entities;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controller
{
    #pragma warning disable CS8604
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController: ControllerBase
    {
        private readonly StoreContext _context;
        public ProductsController(StoreContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("GetProducts")]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            var product = await _context.Products.ToListAsync();
            return Ok(product);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> Product(int id)
        {
            return await _context.Products.FindAsync(id);
        }
    }
}