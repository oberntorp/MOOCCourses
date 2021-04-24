﻿using BookLisrRazor.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        public async Task<IActionResult> GetAll()
        {
            return Json(new { data = await dbContext.Book.ToListAsync() });
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(int id)
        {
            var bookFromDb = await dbContext.Book.FirstOrDefaultAsync(b => b.Id == id);
            if (bookFromDb == null)
            {
                return Json(new { success = false, message = "Error while Deleting" });
            }
            dbContext.Book.Remove(bookFromDb);
            await dbContext.SaveChangesAsync();
            return Json(new { success = true, message = "Delete successful" });
        }
    }
}
