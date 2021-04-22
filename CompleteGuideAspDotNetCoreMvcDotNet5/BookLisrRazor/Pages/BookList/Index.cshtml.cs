using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookLisrRazor.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;

namespace BookLisrRazor.Pages.BookList
{
    public class IndexModel : PageModel
    {
        private readonly ApplicationDbContext dbContext;

        public IndexModel(ApplicationDbContext db)
        {
            dbContext = db;
        }

        public IEnumerable<Book> Books { get; set; }

        public async Task OnGet()
        {
            Books = await dbContext.Book.ToListAsync();
        }
    }
}
