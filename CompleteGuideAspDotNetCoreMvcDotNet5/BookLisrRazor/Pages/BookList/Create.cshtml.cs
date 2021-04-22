using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookLisrRazor.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace BookLisrRazor.Pages.BookList
{
    public class CreateModel : PageModel
    {
        private readonly ApplicationDbContext dbContext; 
        public CreateModel(ApplicationDbContext db)
        {
            dbContext = db;
        }

        public Book Book { get; set; }

        public void OnGet()
        {

        }
    }
}
