using BulkyBook.DataAccess.Data.Repository.IRepository;
using BulkyBook.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BulkyBook.DataAccess.Data.Repository
{
    class CategoryRepository : Repository<Category>, ICategoryRepository
    {
        private readonly ApplicationDbContext dbContext;
        public CategoryRepository(ApplicationDbContext db) : base(db)
        {
            dbContext = db;
        }

        public void Update(Category category)
        {
            var objFromDb = dbContext.Categories.FirstOrDefault(c => c.Id == category.Id);

            if(objFromDb != null)
            {
                objFromDb.Name = category.Name;
            }
        }
    }
}
