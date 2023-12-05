using Microsoft.Dynamics.Commerce.Runtime;
using Microsoft.Dynamics.Commerce.Runtime.DataModel;
using Microsoft.Dynamics.Commerce.Runtime.DataServices.Messages;
using Microsoft.Dynamics.Commerce.Runtime.Messages;
using Microsoft.Dynamics.Commerce.Runtime.Services.Messages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Uptail.CommerceRuntime.Managers
{
    public class ExtendedProductManager : BaseDataManager
    {
        public ExtendedProductManager(RequestContext context) : base(context) { }

        public async Task<SimpleProduct> GetProductByRecordId(long recordId, SearchLocation searchLocation = SearchLocation.Local)
        {
            IEnumerable<SimpleProduct> products = await GetProductsByRecordIds(new long[] { recordId }, searchLocation).ConfigureAwait(false);
            return products != null && products.Any() ? products.First() : null;
        }

        public async Task<IEnumerable<SimpleProduct>> GetProductsByRecordIds(IEnumerable<long> recordIds, SearchLocation searchLocation = SearchLocation.Local)
        {
            var request = new GetProductsServiceRequest(this.Context.GetChannel().RecordId, recordIds, QueryResultSettings.AllRecords)
            {
                SearchLocation = searchLocation
            };

            var response = await this.Context.ExecuteAsync<GetProductsServiceResponse>(request).ConfigureAwait(false);
            return response.Products;
        }

        public async Task<IEnumerable<AttributeValue>> GetProductAttributValuesByProductRecId(long productRecId)
        {
            IEnumerable<AttributeValue> attributeValues = null;

            var attributeProductDict = await GetProductAttributeValuesByProductRecIdArray(new long[] { productRecId }).ConfigureAwait(false);

            if (attributeProductDict != null && attributeProductDict.Any())
            {
                attributeValues = attributeProductDict.First().Value;
            }

            return attributeValues;
        }

        public async Task<Dictionary<long, IEnumerable<AttributeValue>>> GetProductAttributeValuesByProductRecIdArray(long[] productRecIds)
        {
            var getAttributesRequest = new GetAttributeValuesByProductIdsServiceRequest(this.CurrentChannelId, 0, productRecIds, QueryResultSettings.AllRecords);
            var getAttributesResponse = await this.Context.ExecuteAsync<GetAttributeValuesByProductIdsServiceResponse>(getAttributesRequest).ConfigureAwait(false);

            return getAttributesResponse != null ? getAttributesResponse.AttributeValuesPerProduct : null;
        }

        public async Task<IEnumerable<SimpleProduct>> GetProductsDataByRecordIds(IEnumerable<long> recordIds)
        {
            var getProductsRequest = new GetProductsDataRequest(recordIds, QueryResultSettings.AllRecords);
            var getProductsResponse = await this.Context.ExecuteAsync<EntityDataServiceResponse<SimpleProduct>>(getProductsRequest).ConfigureAwait(false);

            return getProductsResponse?.PagedEntityCollection;
        }

        public async Task<ProductWarehouseInventoryInformation> GetEstimatedProductAvailability(IEnumerable<long> productIds, IEnumerable<string> inventLocationIds)
        {
            List<ProductWarehouse> productWarehouses = new List<ProductWarehouse>();

            foreach (long productId in productIds)
            {
                foreach (string inventLocationId in inventLocationIds)
                {
                    productWarehouses.Add(new ProductWarehouse(productId, inventLocationId, this.Context.GetChannelConfiguration().InventLocationDataAreaId));
                }
            }

            var productAvailabilityRequest = new GetEstimatedProductWarehouseAvailabilityServiceRequest(productWarehouses);
            var productAvailabilityResponse = await this.Context.ExecuteAsync<GetEstimatedProductWarehouseAvailabilityServiceResponse>(productAvailabilityRequest).ConfigureAwait(false);

            ProductWarehouseInventoryInformation productAvailability = productAvailabilityResponse.ProductWarehouseInventoryInformation;

            return productAvailability;
        }

        public async Task<ProductPrice> GetProductPrice(string custAccount, long productRecId, string unitOfMeasure, IEnumerable<AffiliationLoyaltyTier> affiliationTiers = null)
        {
            var request = new GetProductPriceRequest
            {
                CustomerAccountNumber = custAccount ?? string.Empty,
                ProductId = productRecId,
                UnitOfMeasureSymbol = unitOfMeasure,
                AffiliationLoyaltyTiers = affiliationTiers
            };

            var response = await this.Context.ExecuteAsync<GetProductPriceResponse>(request).ConfigureAwait(false);

            return response?.ProductPrice;
        }

        public async Task<IEnumerable<Item>> GetItemsAsync(IEnumerable<string> itemIds)
        {
            GetItemsDataRequest getItemsDataRequest = new GetItemsDataRequest(itemIds);
            return (await this.Context.ExecuteAsync<GetItemsDataResponse>(getItemsDataRequest).ConfigureAwait(false)).Items;
        }
    }
}
