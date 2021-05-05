using BulkyBook.DataAccess.Data;
using BulkyBook.DataAccess.Data.Repository.IRepository;
using BulkyBook.Models;
using BulkyBook.Utility;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BulkyBook.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class CoverTypeController : Controller
    {
        private readonly IUnitOfWork unitOfWork;

        public CoverTypeController(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Upsert(int? id)
        {
            CoverType coverType = new CoverType();

            if(id == null)
            {
                return View(coverType);
            }

            var parameter = new DynamicParameters();
            parameter.Add("@Id", id);
            var coverTypeFromProc = unitOfWork.SP_Call.OneRecord<CoverType>(SD.Proc_CoverType_Get, parameter);

            if (coverTypeFromProc == null)
            {
                return NotFound();
            }
            return View(coverTypeFromProc);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Upsert(CoverType coverType)
        {
            if(ModelState.IsValid)
            {
                var parameter = new DynamicParameters();
                parameter.Add("@Name", coverType.Name);
                if(coverType.Id == 0)
                {
                    unitOfWork.SP_Call.Exacute(SD.Proc_CoverType_Create, parameter);
                }
                else
                {
                    parameter.Add("@Id", coverType.Id);
                    unitOfWork.SP_Call.Exacute(SD.Proc_CoverType_Update, parameter);
                }

                unitOfWork.Save();
                return RedirectToAction(nameof(Index));
            }

            return View(coverType);
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            var parameter = new DynamicParameters();
            parameter.Add("@Id", id);
            var objFromDb = unitOfWork.SP_Call.OneRecord<CoverType>(SD.Proc_CoverType_Get, parameter);
            if(objFromDb == null)
            {
                return Json(new { success = false, message = "Error whille deleting" });
            }

            unitOfWork.SP_Call.Exacute(SD.Proc_CoverType_Delete, parameter);
            unitOfWork.Save();
            return Json(new { success = true, message = "Delete successfull" });

        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var allObj = unitOfWork.SP_Call.List<CoverType>(SD.Proc_CoverType_GetAll, null);
            return Json(new { data = allObj });
        }
    }
}
