using Microsoft.Dynamics.Commerce.Runtime.Messages;
using Microsoft.Dynamics.Commerce.Runtime;
using System;
using System.Collections.Generic; 
using System.Threading.Tasks;
using Uptail.CommerceRuntime.Messages;
using Uptail.CommerceRuntime.DataModels;
using System.Net.Http;
using System.Text;
using System.Runtime.Serialization.Json;
using Microsoft.Dynamics.Commerce.Runtime.DataModel;
using System.Net.Http.Headers;
using Microsoft.Extensions.Logging;
using Newtonsoft;
using Newtonsoft.Json;
using System.IO;
using Microsoft.Dynamics.Commerce.Runtime.Services.Messages;
using System.Runtime;
using Uptail.CommerceRuntime.Managers;


namespace Uptail.CommerceRuntime.Services
{
    public class ExtendedCustomerService : IRequestHandlerAsync
    {
        StringContent content;
        private static HttpClient _httpClient = new HttpClient();

        public IEnumerable<Type> SupportedRequestTypes
        {
            get => new[] { typeof(GetCustomerLegacyPurchasesRequest) };
        }

      
        public async Task<Response> Execute(Request request)
        {
            ThrowIf.Null(request, nameof(request));

            

            switch (request)
            {
                case GetCustomerLegacyPurchasesRequest getLegacyPurchasesRequest:
                    return await GetCustomerLegacyPurchasesAsync(getLegacyPurchasesRequest).ConfigureAwait(false);
                default:
                    throw new NotSupportedException($"Request '{request.GetType()}' is not supported.");
            }
        }

        public async Task<Customer> GetCustomerByAccountNumber(string accountNumber, QueryResultSettings settings,RequestContext requestContext)
        {
            ThrowIf.NullOrWhiteSpace(accountNumber, nameof(accountNumber));

            var request = new GetCustomersServiceRequest(settings, accountNumber);
            
            var response = await requestContext.ExecuteAsync<GetCustomersServiceResponse>(request).ConfigureAwait(false);

            return response.Customers.FirstOrDefault();
        }
        private async Task<Response> GetCustomerLegacyPurchasesAsync(GetCustomerLegacyPurchasesRequest request)
        {
            string itemName="";
            var custData = new
            {
                CustomerId = request.CustomerId
            };
           
           var customerData = await GetCustomerByAccountNumber(request.CustomerId,QueryResultSettings.AllRecords, request.RequestContext).ConfigureAwait(false);
            
            if(customerData.Blocked != true)
            { 
                string jsonData = JsonConvert.SerializeObject(custData);
                string url      = "https://prod-38.northeurope.logic.azure.com:443/workflows/483e0d18b8b1467bb2c63d9adab1582c/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=pfNQ_3nhMWoQ0J1_8SOlDVzYdIzfptEzeixE-Hg86GY";
                content         = new StringContent(jsonData, Encoding.UTF8, "application/json");

                var response    = await _httpClient.PostAsync(url, content).ConfigureAwait(false);
                response.EnsureSuccessStatusCode();
                var _content    = await response.Content.ReadAsStringAsync().ConfigureAwait(false);
                var linesList   = JsonConvert.DeserializeObject<List<LegacyItemLine>>(_content);


                var transactions = new List<LegacySalesTransaction>();
                foreach (var line in linesList)
                {
                    ExtendedProductManager prodManager = new ExtendedProductManager(request.RequestContext);
                    IEnumerable<string> itemId = new List<string>() { line.ItemId };
                    var itemData = await prodManager.GetItemsAsync(itemId).ConfigureAwait(false);
                  foreach (var item in itemData)
                    {
                        itemName = item.Name;
                    }
                    transactions.Add(new LegacySalesTransaction { ItemNumber = line.ItemId, Amount = line.Amount,Currency= line.Currency, Description = itemName, Price = line.Price, TransactionId = line.ItemId, Quantity= line.Quantity, SalesDateTime = DateTime.Parse(line.Date)});
                }
           

                return await Task.FromResult<Response>(new GetCustomerLegacyPurchasesResponse(transactions)).ConfigureAwait(false);
            }else
            {
                throw new CommerceException("Recsource_1","Customer is blocked.");
            }
        }

    }
}
