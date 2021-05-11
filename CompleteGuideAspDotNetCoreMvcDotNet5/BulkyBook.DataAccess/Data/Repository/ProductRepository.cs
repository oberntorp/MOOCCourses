using BulkyBook.DataAccess.Data.Repository.IRepository;
using BulkyBook.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BulkyBook.DataAccess.Data.Repository
{
    class ProductRepository : Repository<Product>, IProductRepository
    {
        private readonly ApplicationDbContext dbContext;
        public ProductRepository(ApplicationDbContext db) : base(db)
        {
            dbContext = db;
        }

        public void Update(Product product)
        {
            var objFromDb = dbContext.Products.FirstOrDefault(c => c.Id == product.Id);

            if(objFromDb != null)
            {
                if(objFromDb.ImageUrl != null)
                {
                    objFromDb.ImageUrl = product.ImageUrl;
                    objFromDb.ISBN = product.ISBN;
                    objFromDb.Price = product.Price;
                    objFromDb.Price50 = product.Price50;
                    objFromDb.ListPrice = product.ListPrice;
                    objFromDb.Price100 = product.Price100;
                    objFromDb.Title = product.Title;
                    objFromDb.Description = product.Description;
                    objFromDb.CategoryId = product.CategoryId;
                    objFromDb.Author = product.Author;
                    objFromDb.CoverTypeId = product.CoverTypeId;
                }
            }
        }
    }
}
