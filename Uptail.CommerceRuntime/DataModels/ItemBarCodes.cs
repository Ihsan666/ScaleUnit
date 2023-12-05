using Microsoft.Dynamics.Commerce.Runtime.DataModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;
using System.Text;

namespace Uptail.CommerceRuntime.DataModels
{
    [DataContract]
    public class ItemBarCodes : CommerceEntity
    {
        private const string BarcodeColumn = "ITEMBARCODE";
        private const string ItemIdColumn = "ITEMID";
        private const string RetailVariantIdColumn = "RETAILVARIANTID";
        public ItemBarCodes() : base("ItemBarCodes"){ }

        [DataMember,Column(BarcodeColumn)]
        [Key]
        public string Barcode { 
            get { return (string)this[BarcodeColumn]; }
            set { this[BarcodeColumn] = value;}
        }
        [DataMember, Column(ItemIdColumn)]
        public string ItemId
        {
            get { return (string)this[ItemIdColumn]; }
            set { this[ItemIdColumn] = value; }
        }
        [DataMember, Column(RetailVariantIdColumn)]
        public string RetailVariantId
        {
            get { return (string)this[RetailVariantIdColumn]; }
            set { this[RetailVariantIdColumn] = value; }
        }
    }
}
