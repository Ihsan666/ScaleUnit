using Microsoft.Dynamics.Commerce.Runtime.DataModel;
using Microsoft.Dynamics.Commerce.Runtime;
using Microsoft.Dynamics.Commerce.Runtime.Messages;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;
using System.Text;

namespace Uptail.CommerceRuntime.Messages
{
    [DataContract]
    public sealed class GetItemBarCodesRequest:Request
    {
        [DataMember,Required]
        public string itemId { get; set; }
        public GetItemBarCodesRequest(string itemId) {
            ThrowIf.NullOrWhiteSpace(itemId, "customerId");
            this.itemId = itemId;
        }
    }
}
