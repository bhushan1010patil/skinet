
using API.Dtos;
using AutoMapper;
using core.Entities;
using Core.Entities;
using Core.interfaces;
using Core.Interfaces;
using Core.Specifications;
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
       private readonly IGenericRepository<Product> _productRepo;
       private readonly IGenericRepository<ProductBrand> _productBrandRepo;
       private readonly IGenericRepository<ProductType> _productTypeRepo;
       private readonly IMapper _mapper;

        public ProductsController(IGenericRepository<Product> productRepo
        ,IGenericRepository<ProductBrand> productBrandRepo
        ,IGenericRepository<ProductType> productTypeRepo
        ,IMapper mapper)
        {
            _productRepo = productRepo;
            _productBrandRepo = productBrandRepo;
            _productTypeRepo = productTypeRepo;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("GetProducts")]
        public async Task<ActionResult<IReadOnlyList<ProductToReturnDto>>> GetProducts()
        {
            var spec = new ProductsWithTypesAndBrandsSpecification();
            var products = await _productRepo.ListAsync(spec);
            return Ok(_mapper.Map<IReadOnlyList<Product>,IReadOnlyList<ProductToReturnDto>>(products));
        }

        [HttpGet]
        [Route("Product")]
        public async Task<ActionResult<ProductToReturnDto>> Product(int id)
        {
            var spec = new ProductsWithTypesAndBrandsSpecification(id);
            var product = await _productRepo.GetEntityWithSpec(spec);
            return _mapper.Map<Product, ProductToReturnDto>(product);
        }

        [HttpGet("brands")]
        public async Task<ActionResult<IReadOnlyList<ProductBrand>>> GetProductBrands()
        {
            return Ok(await _productBrandRepo.ListAllAsync());
        }

         [HttpGet("types")]
        public async Task<ActionResult<IReadOnlyList<ProductType>>> GetProductTypes()
        {
            return Ok(await _productTypeRepo.ListAllAsync());
        }
    }
}