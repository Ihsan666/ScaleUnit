using System;
using System.Collections.Generic;
using System.Text;

namespace Uptail.CommerceRuntime.DataModels
{
    public class LegacyItemLine
    {
        public decimal Amount { get; set; }
        public string Currency { get; set; }
        public string Date { get; set; }
        public string ItemId { get; set; }
        public decimal Price { get; set; }
        public decimal Quantity { get; set; }
        public string TransactionId { get; set; }
        public string Description { get; set; }
    }
}
