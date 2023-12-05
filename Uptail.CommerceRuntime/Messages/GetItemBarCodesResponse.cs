using Microsoft.Dynamics.Commerce.Runtime.Messages;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;
using Uptail.CommerceRuntime.DataModels;

namespace Uptail.CommerceRuntime.Messages
{
    [DataContract]
    public sealed class GetItemBarCodesResponse:Response
    {
        [DataMember]
        public IEnumerable<ItemBarCodes> itemBarCodes { get; private set; }

        public GetItemBarCodesResponse(IEnumerable<ItemBarCodes> itembarcodes)
        {
            this.itemBarCodes = itembarcodes ?? new List<ItemBarCodes>();
        }

        public GetItemBarCodesResponse(ItemBarCodes barcodes)
        {
        }
    }
}
