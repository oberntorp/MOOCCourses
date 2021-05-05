using BulkyBook.DataAccess.Data.Repository.IRepository;
using BulkyBook.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BulkyBook.DataAccess.Data.Repository
{
    public class CoverTypeRepository: Repository<CoverType>, ICoverTypeRepository
    {
        private readonly ApplicationDbContext dbContext;

        public CoverTypeRepository(ApplicationDbContext db): base(db)
        {
            dbContext = db;
        }

        public void Update(CoverType coverType)
        {
            var objFromDb = dbContext.CoverTypes.FirstOrDefault(c => c.Id == coverType.Id);

            if (objFromDb != null)
            {
                objFromDb.Name = coverType.Name;
            }
        }
    }
}
