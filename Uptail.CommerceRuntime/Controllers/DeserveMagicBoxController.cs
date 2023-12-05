using Microsoft.Dynamics.Commerce.Runtime.DataModel;
using Microsoft.Dynamics.Commerce.Runtime;
using Microsoft.Dynamics.Commerce.Runtime.Hosting.Contracts;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Uptail.CommerceRuntime.DataModels;
using System.ComponentModel;
using Microsoft.Dynamics.Commerce.Runtime.Messages;
using Uptail.CommerceRuntime.Messages;
using System.Collections;

namespace Uptail.CommerceRuntime.Controllers
{
    [RoutePrefix("DeserveMagicBox")]
    [BindEntity(typeof(MagicBox))]
    public class DeserveMagicBoxController:IController
    {
        List<MagicBox> _magicBoxes;
        public DeserveMagicBoxController() { 

            _magicBoxes = new List<MagicBox>
            {
                    new MagicBox() { BoxNumber = "0000000001", BoxName = "Beauty Box", BoxPurchased = false },
                    new MagicBox() { BoxNumber = "0000000002", BoxName = "Diet Box", BoxPurchased = false },
                    new MagicBox() { BoxNumber = "0000000003", BoxName = "Perfumes Box", BoxPurchased = false }
            };
        }
        [HttpPost]
        [Authorization(CommerceRoles.Anonymous)]
        public async Task<MagicBox> GetMagicBoxDetails(IEndpointContext context, [EntityKey] string boxNumber)
        {
           
            ThrowIf.Null(boxNumber, "boxNumber");

            MagicBox box = _magicBoxes.Find(item => item.BoxNumber == boxNumber);
          
            return await Task.FromResult(box).ConfigureAwait(false);
  
        }
        [HttpPost]
        [Authorization(CommerceRoles.Anonymous)]
        public async Task<MagicBox> updateMagicBox(IEndpointContext context, [EntityKey] string boxNumber)
        {

            ThrowIf.Null(boxNumber, "boxNumber");

            MagicBox box = _magicBoxes.Find(item => item.BoxNumber == boxNumber);
            box.BoxPurchased = true;

            var index = _magicBoxes.FindIndex(x => x.BoxNumber == boxNumber);

            if (index > -1)
            {
                _magicBoxes[index] = box;
            }

            MagicBox updatedBox = _magicBoxes.Find(item => item.BoxNumber == boxNumber);

            return await Task.FromResult(updatedBox).ConfigureAwait(false);

        }
        [HttpPost]
        [Authorization(CommerceRoles.Anonymous)]
        public async Task<PagedResult<MagicBox>> GetAllMagicBoxes(IEndpointContext context)
        {
           
            return await Task.FromResult(new PagedResult<MagicBox>(_magicBoxes.AsReadOnly())).ConfigureAwait(false);
        }

    }
}
