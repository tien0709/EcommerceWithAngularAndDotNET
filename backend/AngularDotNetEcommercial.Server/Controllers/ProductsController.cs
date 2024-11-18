using AngularDotNetEcommercial.Core.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularDotNetEcommercial.Core.Interfaces;
using System.Net.WebSockets;
using AngularDotNetEcommercial.Backend.Infrastructure.Data;
using AutoMapper;
using AngularDotNetEcommercial.Server.Dtos;
using AngularDotNetEcommercial.Server.Errors;

namespace AngularDotNetEcommercial.Server.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class ProductsController : Controller
    {
        // GET: ProductsController
        //private static readonly []

        private readonly IGenericRepository<Product> _productReposity;
        private readonly IMapper _mapper;

        public ProductsController(IGenericRepository<Product> productReposity, IMapper mapper)
        {
            _productReposity = productReposity;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<ProductDto>>> getProducts(string? sort, int? CategoryId)
        {
            var spec = new ProductSpecification(sort, CategoryId);
            var Products = await _productReposity.GetListAsync(spec);
            var productDtos = Products.Select(product => _mapper.Map<Product, ProductDto>(product)).ToList();
            return Ok(productDtos);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ProductDto>> getProduct(int id)
        {
            var spec = new ProductSpecification(id);
            var Product = await _productReposity.GetEntityWithSpecAsync(spec);
            if (Product == null)
            {
                return NotFound(new ApiResponse(404));
            }
            return _mapper.Map<Product, ProductDto>(Product);
        }

        //// GET: ProductsController/Create
        //public ActionResult Create()
        //{
        //    return View();
        //}

        //// POST: ProductsController/Create
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Create(IFormCollection collection)
        //{
        //    try
        //    {
        //        return RedirectToAction(nameof(Index));
        //    }
        //    catch
        //    {
        //        return View();
        //    }
        //}

        //// GET: ProductsController/Edit/5
        //public ActionResult Edit(int id)
        //{
        //    return View();
        //}

        //// POST: ProductsController/Edit/5
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Edit(int id, IFormCollection collection)
        //{
        //    try
        //    {
        //        return RedirectToAction(nameof(Index));
        //    }
        //    catch
        //    {
        //        return View();
        //    }
        //}

        //// GET: ProductsController/Delete/5
        //public ActionResult Delete(int id)
        //{
        //    return View();
        //}

        //// POST: ProductsController/Delete/5
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Delete(int id, IFormCollection collection)
        //{
        //    try
        //    {
        //        return RedirectToAction(nameof(Index));
        //    }
        //    catch
        //    {
        //        return View();
        //    }
        //}
    }
}
