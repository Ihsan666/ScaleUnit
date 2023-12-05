using Microsoft.Dynamics.Commerce.Runtime;
using Microsoft.Dynamics.Commerce.Runtime.Data;
using Microsoft.Dynamics.Commerce.Runtime.DataModel;
using Microsoft.Dynamics.Commerce.Runtime.Messages;
using Microsoft.Dynamics.Commerce.Runtime.Services.Messages;
using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Caching;
using System.Threading.Tasks;
using Uptail.CommerceRuntime.DataModels;
using Uptail.CommerceRuntime.Messages;
using Microsoft.Dynamics.Commerce.Runtime.Extensions;
using System.ComponentModel;

namespace Uptail.CommerceRuntime.Services
{

    public class SafaItemsBarCodesService : IRequestHandlerAsync
    {
        private static ObjectCache ItemBarCodesCache = MemoryCache.Default;
        private static readonly string defaultCacheItemExpirationInMinutes = "15";
        private static readonly string extAttributeCacheItemExpirationInMinutesKey = "ext.AttributeCacheItemExpirationInMinutes";
        public IEnumerable<Type> SupportedRequestTypes
        { 
            get=>new[]{typeof(GetItemBarCodesRequest) };
        }

        public async Task<Response> Execute(Request request)
        {
            ThrowIf.Null(request, nameof(request));

            switch (request)
            {
                case GetItemBarCodesRequest getItemBarCodesRequest:
                    return await GetItemBarCodesRequestAsync(getItemBarCodesRequest).ConfigureAwait(false);
                default:
                    throw new NotSupportedException($"Request '{request.GetType()}' is not supported.");
            }
        }
    
        private async Task<Response> GetItemBarCodesRequestAsync(GetItemBarCodesRequest request)
        {
        
            ThrowIf.Null(request.RequestContext, "request.RequestContext");


            string cacheKey = $"citta-extension-attributes-{request.itemId}";
            string cacheDuration = request.RequestContext.Runtime.Configuration.GetSettingValue(extAttributeCacheItemExpirationInMinutesKey);
            if (cacheDuration.IsNullOrEmpty())
            {
                cacheDuration = defaultCacheItemExpirationInMinutes;
            }

            CacheItemPolicy cacheItemPolicy = new CacheItemPolicy { SlidingExpiration = TimeSpan.FromMinutes(Convert.ToDouble(cacheDuration)) };
            var cachedAttributes = ItemBarCodesCache.Get(cacheKey);

            if (cachedAttributes == null)
            {
                    using (DatabaseContext databaseContext = new DatabaseContext(request.RequestContext))
                    {
                        var query = new SqlPagedQuery(QueryResultSettings.AllRecords)
                        {
                            DatabaseSchema = "",
                            Select = new ColumnSet("ITEMBARCODE", "ITEMID", "RETAILVARIANTID"),
                            From = "ax.INVENTITEMBARCODE",
                            Where = "ITEMID=@ITEMID"
                        };
                        query.Parameters["@ITEMID"] = request.itemId;

                        var barcodes = await databaseContext.ReadEntityAsync<ItemBarCodes>(query).ConfigureAwait(false);
                        ItemBarCodesCache.Set(cacheKey, barcodes,cacheItemPolicy);

                        return new GetItemBarCodesResponse(barcodes);
                }
                   
            }
            else
            {
                
                var barcodes = (IEnumerable<ItemBarCodes>)cachedAttributes;// new PagedResult<ItemBarCodes>((System.Collections.ObjectModel.ReadOnlyCollection<ItemBarCodes>)cachedAttributes);
                                                              //(ItemBarCodes)cachedAttributes;
            
               return new GetItemBarCodesResponse(barcodes);
            }


            /*
            using (DatabaseContext databaseContext=new DatabaseContext(request.RequestContext))
            {
                var query = new SqlPagedQuery(QueryResultSettings.AllRecords)
                {
                    DatabaseSchema = "",
                    Select = new ColumnSet("ITEMBARCODE", "ITEMID", "RETAILVARIANTID"),
                    From = "ax.INVENTITEMBARCODE",
                    Where = "ITEMID=@ITEMID"
                };
                query.Parameters["@ITEMID"] = request.itemId;

                var barcodes = await databaseContext.ReadEntityAsync<ItemBarCodes>(query).ConfigureAwait(false);

                return new GetItemBarCodesResponse(barcodes);
            }**/
        }

            
    }
}
