using BulkyBook.DataAccess.Data;
using BulkyBook.DataAccess.Data.Repository.IRepository;
using BulkyBook.Models;
using BulkyBook.Models.ViewModels;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace BulkyBook.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class ProductController : Controller
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IWebHostEnvironment hostingEnvironment;

        public ProductController(IUnitOfWork unitOfWork, IWebHostEnvironment hostingEnvironment)
        {
            this.unitOfWork = unitOfWork;
            this.hostingEnvironment = hostingEnvironment;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Upsert(int? id)
        {
            ProductViewModel productViewModel = new ProductViewModel()
            {
                Product = new Product(),
                CategoryList = unitOfWork.Category.GetAll().Select(i => new SelectListItem() { 
                Text = i.Name,
                Value = i.Id.ToString()
                }),
                CoverTypeList = unitOfWork.CoverType.GetAll().Select(i => new SelectListItem()
                {
                    Text = i.Name,
                    Value = i.Id.ToString()
                }),

            };

            if (id == null)
            {
                return View(productViewModel);
            }

            productViewModel.Product = unitOfWork.Product.Get(id.GetValueOrDefault());

            if (productViewModel.Product == null)
            {
                return NotFound();
            }
            return View(productViewModel);
        }

        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public IActionResult Upsert(Category category)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        if (category.Id == 0)
        //        {
        //            unitOfWork.Category.Add(category);
        //        }
        //        else
        //        {
        //            unitOfWork.Category.Update(category);
        //        }

        //        unitOfWork.Save();
        //        return RedirectToAction(nameof(Index));
        //    }

        //    return View(category);
        //}

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            var objFromDb = unitOfWork.Category.Get(id);
            if (objFromDb == null)
            {
                return Json(new { success = false, message = "Error whille deleting" });
            }

            unitOfWork.Category.Remove(objFromDb);
            unitOfWork.Save();
            return Json(new { success = true, message = "Delete successfull" });

        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var allObj = unitOfWork.Product.GetAll(includeProperties: "Category,CoverType");
            return Json(new { data = allObj });
        }
    }
}
