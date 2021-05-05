using BulkyBook.DataAccess.Data.Repository.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BulkyBook.DataAccess.Data.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext dbContext;

        public UnitOfWork(ApplicationDbContext db)
        {
            dbContext = db;
            Category = new CategoryRepository(dbContext);
            CoverType = new CoverTypeRepository(dbContext);
            SP_Call = new SP_Call(dbContext);
        }

        public ICategoryRepository Category { get; private set; }
        public ISP_Call SP_Call { get; private set; }

        public CoverTypeRepository CoverType { get; private set; }

        public void Dispose()
        {
            dbContext.Dispose();
        }

        public void Save()
        {
            dbContext.SaveChanges();
        }
    }
}
