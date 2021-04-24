using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookLisrRazor.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace BookLisrRazor.Pages.BookList
{
    public class EditModel : PageModel
    {
        private ApplicationDbContext dbContext;

        public EditModel(ApplicationDbContext db)
        {
            dbContext = db;
        }

        [BindProperty]
        public Book Book { get; set; }

        public async Task OnGet(int id)
        {
            Book = await dbContext.Book.FindAsync(id);
        }

        public async Task<IActionResult> OnPost()
        {
            if (ModelState.IsValid)
            {
                var BookFromDb = await dbContext.Book.FindAsync(Book.Id);
                BookFromDb.Name = Book.Name;
                BookFromDb.ISBN = Book.ISBN;
                BookFromDb.Author = Book.Author;

                await dbContext.SaveChangesAsync();

                return RedirectToPage("Index");
            }

            return RedirectToPage();
        }
    }
}
