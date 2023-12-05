using Microsoft.Dynamics.Commerce.Runtime.DataModel;
using Microsoft.Dynamics.Commerce.Runtime;
using Microsoft.Dynamics.Commerce.Runtime.Hosting.Contracts;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Uptail.CommerceRuntime.DataModels;
using Microsoft.Dynamics.Commerce.Runtime.Messages;
using Uptail.CommerceRuntime.Messages;

namespace Uptail.CommerceRuntime.Controllers
{
    [RoutePrefix("CustomerHistory")]
    [BindEntity(typeof(CustomerHistory))]
    public class SafaCustomerHistoryController:IController
    {
         [HttpPost]
         [Authorization(CommerceRoles.Anonymous)]
         public async Task<PagedResult<CustomerHistory>> GetCustomerHistory1(IEndpointContext context, [EntityKey] string customerId)
         {
             ThrowIf.Null(customerId, "customerId");

             var visits = new List<CustomerHistory>();

             if (customerId.Equals("ANI002", StringComparison.OrdinalIgnoreCase))
             {
                 visits.Add(new CustomerHistory() { SalesDateTime = DateTime.Now, CustometId = customerId, StoreId = "001", TransactionId = "TT-0001", Description = "Makeup Kit", ItemNumber = "IT001", Quantity = 1, Price = 10, Amount = 10, Currency = "SAR" });
                 visits.Add(new CustomerHistory() { SalesDateTime = DateTime.Now, CustometId = customerId, StoreId = "001", TransactionId = "TT-0002", Description = "Body Lotion", ItemNumber = "IT002", Quantity = 2, Price = 10, Amount = 20, Currency = "SAR" });
             }
            //  await context.ExecuteAsync<GetCustomerLegacyPurchasesResponse>(request).ConfigureAwait(false);
   
            return  await Task.FromResult(new PagedResult<CustomerHistory>(visits.AsReadOnly())).ConfigureAwait(false);
         }
    }
}
