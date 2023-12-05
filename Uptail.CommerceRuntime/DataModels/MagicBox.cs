using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Uptail.CommerceRuntime.DataModels
{
    [DataContract]
    public class MagicBox
    {
        [DataMember,Key]
        public string BoxNumber { get; set; }
        [DataMember]
        public string BoxName { get; set; }
        [DataMember]
        public Boolean BoxPurchased { get; set; }
    }
}
