using Microsoft.Dynamics.Commerce.Runtime.DataModel;
using Microsoft.Dynamics.Commerce.Runtime;
using Microsoft.Dynamics.Commerce.Runtime.Hosting.Contracts;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Uptail.CommerceRuntime.DataModels;
using Uptail.CommerceRuntime.Messages;
using System.ComponentModel;

namespace Uptail.CommerceRuntime.Controllers
{
    [RoutePrefix("ItemBarCodes")]
    [BindEntity(typeof(ItemBarCodes))]
    public class SafaItemBarCodesController:IController
    {
        [HttpPost]
        [Authorization(CommerceRoles.Anonymous)]
        public async Task<PagedResult<ItemBarCodes>> GetItemBarCodes(IEndpointContext context, string itemId)
        {
            ThrowIf.Null(itemId, "itemId");
            var request  = new GetItemBarCodesRequest(itemId);
            var response = await context.ExecuteAsync<GetItemBarCodesResponse>(request).ConfigureAwait(false);
           // await Task.FromResult(new PagedResult<ItemBarCodes>(response.AsReadOnly())).ConfigureAwait(false);
            return (PagedResult<ItemBarCodes>)response.itemBarCodes;
        }
    }
}
