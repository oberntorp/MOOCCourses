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
using System.IO;

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
                }) 
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

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Upsert(ProductViewModel productVM)
        {
            if (ModelState.IsValid)
            {
                string webRoot = hostingEnvironment.WebRootPath;
                var files = HttpContext.Request.Form.Files;

                if(files.Count > 0)
                {
                    string fileNameWithOutExt = Guid.NewGuid().ToString();
                    var uploads = Path.Combine(webRoot, @"images\products");
                    var extention = Path.GetExtension(files[0].FileName);

                    if(productVM.Product.ImageUrl != null)
                    {
                        // edit, remove old image
                        var imagePath = Path.Combine(webRoot, productVM.Product.ImageUrl.TrimStart('\\'));
                        if(System.IO.File.Exists(imagePath))
                        {
                            System.IO.File.Delete(imagePath);
                        }
                    }
                    string fileNameWithExt = $"{fileNameWithOutExt}{extention}";
                    using (var fileStreams = new FileStream(Path.Combine(uploads, fileNameWithExt), FileMode.Create))
                    {
                        files[0].CopyTo(fileStreams);
                    }
                    productVM.Product.ImageUrl = @"\images\products\"+fileNameWithExt;
                }
                else
                {
                    // update without image being changed
                    if(productVM.Product.Id != 0)
                    {
                        Product objFromDb = unitOfWork.Product.Get(productVM.Product.Id);
                        productVM.Product.ImageUrl = objFromDb.ImageUrl;
                    }
                }
                if (productVM.Product.Id == 0)
                    {
                        unitOfWork.Product.Add(productVM.Product);
                    }
                    else
                    {
                        unitOfWork.Product.Update(productVM.Product);
                    }

                unitOfWork.Save();
                return RedirectToAction(nameof(Index));
            }
            else
            {
                productVM.CategoryList = unitOfWork.Category.GetAll().Select(i => new SelectListItem()
                {
                    Text = i.Name,
                    Value = i.Id.ToString()
                });
                productVM.CoverTypeList = unitOfWork.CoverType.GetAll().Select(i => new SelectListItem()
                {
                    Text = i.Name,
                    Value = i.Id.ToString()
                });
                if(productVM.Product.Id != 0)
                {
                    productVM.Product = unitOfWork.Product.Get(productVM.Product.Id);
                }
            }
            return View(productVM);
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            var objFromDb = unitOfWork.Product.Get(id);
            if (objFromDb == null)
            {
                return Json(new { success = false, message = "Error whille deleting" });
            }

            string webRoot = hostingEnvironment.WebRootPath;
            var imagePath = Path.Combine(webRoot, objFromDb.ImageUrl.TrimStart('\\'));
            if (System.IO.File.Exists(imagePath))
            {
                System.IO.File.Delete(imagePath);
            }
            unitOfWork.Product.Remove(objFromDb);
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
