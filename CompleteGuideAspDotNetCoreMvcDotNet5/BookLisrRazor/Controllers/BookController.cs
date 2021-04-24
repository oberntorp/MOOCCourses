using BookLisrRazor.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookLisrRazor.Controllers
{
    [Route("api/Book")]
    [ApiController]
    public class BookController : Controller
    {
        private readonly ApplicationDbContext dbContext;

        public BookController(ApplicationDbContext db)
        {
            dbContext = db;
        }
        public IActionResult GetAll()
        {
            return Json(new { data = dbContext.Book.ToList() });
        }
    }
}
