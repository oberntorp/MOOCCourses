using BulkyBook.DataAccess.Data;
using BulkyBook.DataAccess.Data.Repository.IRepository;
using BulkyBook.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BulkyBook.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class ProductController : Controller
    {
        private readonly IUnitOfWork unitOfWork;

        public ProductController(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Upsert(int? id)
        {
            Category category = new Category();

            if(id == null)
            {
                return View(category);
            }

            category = unitOfWork.Category.Get(id.GetValueOrDefault());

            if(category == null)
            {
                return NotFound();
            }
            return View(category);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Upsert(Category category)
        {
            if(ModelState.IsValid)
            {
                if(category.Id == 0)
                {
                    unitOfWork.Category.Add(category);
                }
                else
                {
                    unitOfWork.Category.Update(category);
                }

                unitOfWork.Save();
                return RedirectToAction(nameof(Index));
            }

            return View(category);
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            var objFromDb = unitOfWork.Category.Get(id);
            if(objFromDb == null)
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
            var allObj = unitOfWork.Category.GetAll();
            return Json(new { data = allObj });
        }
    }
}
