using BulkyBook.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BulkyBook.DataAccess.Data.Repository.IRepository
{
    interface ICoverTypeRepository: IRepository<CoverType>
    {
        void Update(CoverType category);
    }
}
