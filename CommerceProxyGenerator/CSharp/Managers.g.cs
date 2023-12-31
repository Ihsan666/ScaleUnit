// <auto-generated />
namespace Uptail.Commerce.RetailProxy.Extension
{
    using System;
    using System.CodeDom.Compiler;
    using System.Collections.Generic;
    using System.Collections.ObjectModel;
    using System.IO;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.Dynamics.Commerce.RetailProxy;
    
    /// <summary>
    /// Class implements Store Operations Manager.
    /// </summary>
    [GeneratedCodeAttribute("Uptail.Commerce.RetailProxy.Extension", "1.0")]
    internal class StoreOperationsManager : IStoreOperationsManager
    {
        private IContext context;

        /// <summary>
        /// Initializes a new instance of the <see cref="StoreOperationsManager"/> class.
        /// </summary>
        /// <param name="context">The context.</param>
        public StoreOperationsManager(IContext context)
        {
            this.context = context;
        }
    
        
        /// <summary>
        /// UptailSearchLegacyPurchases method.
        /// </summary>
        /// <param name="customerAccountId">The customerAccountId.</param>
        /// <param name="queryResultSettings">The queryResultSettings.</param>
        /// <returns>Collection of LegacySalesTransaction.</returns>
        public async Task<PagedResult<LegacySalesTransaction>> UptailSearchLegacyPurchases(string customerAccountId, QueryResultSettings queryResultSettings = null)
        {       
            return await this.context.ExecuteOperationAsync<LegacySalesTransaction>(
                "",
                "StoreOperations",
                "UptailSearchLegacyPurchases",
                true, queryResultSettings, null, OperationParameter.Create("customerAccountId", customerAccountId, false));
        }
        
    }
    
    /// <summary>
    /// Class implements MagicBox Manager.
    /// </summary>
    [GeneratedCodeAttribute("Uptail.Commerce.RetailProxy.Extension", "1.0")]
    internal class MagicBoxManager : IMagicBoxManager
    {
        private IContext context;

        /// <summary>
        /// Initializes a new instance of the <see cref="MagicBox"/> class.
        /// </summary>
        /// <param name="context">The context.</param>
        public MagicBoxManager(IContext context)
        {
            this.context = context;
        }

        /// <summary>
        /// Creates the specified entity.
        /// </summary>
        /// <param name="entity">The entity.</param>
        /// <returns>The updated entity after creation.</returns>
        public async Task<MagicBox> Create(MagicBox entity)
        {
            return await this.context.Create<MagicBox>("DeserveMagicBox", entity);
        }

        /// <summary>
        /// Reads the entity with specified identifier.
        /// </summary>
        /// <param name="boxNumber">The boxNumber.</param>
        /// <param name="expandProperties">The navigation properties to be expanded.</param>
        /// <returns>The entity.</returns>
        public async Task<MagicBox> Read(string boxNumber, ICollection<string> expandProperties = null)
        {
            return await this.context.Read<MagicBox>(
                    "DeserveMagicBox",
                    e => e.BoxNumber == boxNumber,
                    expandProperties,
                    OperationParameter.Create("BoxNumber", boxNumber, true));
        }
      
        /// <summary>
        /// Read all entities with specified query settings.
        /// </summary>
        /// <param name="queryResultSettings">The query result settings.</param>
        /// <param name="expandProperties">The navigation properties to be expanded.</param>
        /// <returns>The collection of entities.</returns>
        public async Task<PagedResult<MagicBox>> ReadAll(QueryResultSettings queryResultSettings, ICollection<string> expandProperties = null)
        {
            return await this.context.ReadAll<MagicBox>("DeserveMagicBox", expandProperties, queryResultSettings);
        }

        /// <summary>
        /// Updates the specified entity.
        /// </summary>
        /// <param name="entity">The entity.</param>
        /// <returns>The updated entity.</returns>
        public async Task<MagicBox> Update(MagicBox entity)
        {
            return await this.context.Update<MagicBox>("DeserveMagicBox", entity);
        }

        /// <summary>
        /// Deletes the specified entity.
        /// </summary>
        /// <param name="entity">The entity.</param>
        /// <returns>No return.</returns>
        public async Task Delete(MagicBox entity)
        {
            await this.context.Delete<MagicBox>("DeserveMagicBox", entity);
        }
        
        // Operations
        
        /// <summary>
        /// GetMagicBoxDetails method.
        /// </summary>
        /// <param name="boxNumber">The boxNumber.</param>
        /// <returns>MagicBox object.</returns>
        public async Task<MagicBox> GetMagicBoxDetails(string boxNumber)
        {       
            return await this.context.ExecuteOperationSingleResultAsync<MagicBox>(
                "DeserveMagicBox",
                "MagicBox",
                "GetMagicBoxDetails",
                true, null, OperationParameter.Create("BoxNumber", boxNumber, true));
        }
        
        /// <summary>
        /// updateMagicBox method.
        /// </summary>
        /// <param name="boxNumber">The boxNumber.</param>
        /// <returns>MagicBox object.</returns>
        public async Task<MagicBox> updateMagicBox(string boxNumber)
        {       
            return await this.context.ExecuteOperationSingleResultAsync<MagicBox>(
                "DeserveMagicBox",
                "MagicBox",
                "updateMagicBox",
                true, null, OperationParameter.Create("BoxNumber", boxNumber, true));
        }
        
        /// <summary>
        /// GetAllMagicBoxes method.
        /// </summary>
        /// <param name="queryResultSettings">The queryResultSettings.</param>
        /// <returns>Collection of MagicBox.</returns>
        public async Task<PagedResult<MagicBox>> GetAllMagicBoxes(QueryResultSettings queryResultSettings = null)
        {       
            return await this.context.ExecuteOperationAsync<MagicBox>(
                "DeserveMagicBox",
                "MagicBox",
                "GetAllMagicBoxes",
                true, queryResultSettings, null);
        }
        
    }
    
    /// <summary>
    /// Class implements CustomerHistory Manager.
    /// </summary>
    [GeneratedCodeAttribute("Uptail.Commerce.RetailProxy.Extension", "1.0")]
    internal class CustomerHistoryManager : ICustomerHistoryManager
    {
        private IContext context;

        /// <summary>
        /// Initializes a new instance of the <see cref="CustomerHistory"/> class.
        /// </summary>
        /// <param name="context">The context.</param>
        public CustomerHistoryManager(IContext context)
        {
            this.context = context;
        }

        /// <summary>
        /// Creates the specified entity.
        /// </summary>
        /// <param name="entity">The entity.</param>
        /// <returns>The updated entity after creation.</returns>
        public async Task<CustomerHistory> Create(CustomerHistory entity)
        {
            return await this.context.Create<CustomerHistory>("CustomerHistory", entity);
        }

        /// <summary>
        /// Reads the entity with specified identifier.
        /// </summary>
        /// <param name="custometId">The custometId.</param>
        /// <param name="expandProperties">The navigation properties to be expanded.</param>
        /// <returns>The entity.</returns>
        public async Task<CustomerHistory> Read(string custometId, ICollection<string> expandProperties = null)
        {
            return await this.context.Read<CustomerHistory>(
                    "CustomerHistory",
                    e => e.CustometId == custometId,
                    expandProperties,
                    OperationParameter.Create("CustometId", custometId, true));
        }
      
        /// <summary>
        /// Read all entities with specified query settings.
        /// </summary>
        /// <param name="queryResultSettings">The query result settings.</param>
        /// <param name="expandProperties">The navigation properties to be expanded.</param>
        /// <returns>The collection of entities.</returns>
        public async Task<PagedResult<CustomerHistory>> ReadAll(QueryResultSettings queryResultSettings, ICollection<string> expandProperties = null)
        {
            return await this.context.ReadAll<CustomerHistory>("CustomerHistory", expandProperties, queryResultSettings);
        }

        /// <summary>
        /// Updates the specified entity.
        /// </summary>
        /// <param name="entity">The entity.</param>
        /// <returns>The updated entity.</returns>
        public async Task<CustomerHistory> Update(CustomerHistory entity)
        {
            return await this.context.Update<CustomerHistory>("CustomerHistory", entity);
        }

        /// <summary>
        /// Deletes the specified entity.
        /// </summary>
        /// <param name="entity">The entity.</param>
        /// <returns>No return.</returns>
        public async Task Delete(CustomerHistory entity)
        {
            await this.context.Delete<CustomerHistory>("CustomerHistory", entity);
        }
        
        // Operations
        
        /// <summary>
        /// GetCustomerHistory1 method.
        /// </summary>
        /// <param name="custometId">The custometId.</param>
        /// <param name="queryResultSettings">The queryResultSettings.</param>
        /// <returns>Collection of CustomerHistory.</returns>
        public async Task<PagedResult<CustomerHistory>> GetCustomerHistory1(string custometId, QueryResultSettings queryResultSettings = null)
        {       
            return await this.context.ExecuteOperationAsync<CustomerHistory>(
                "CustomerHistory",
                "CustomerHistory",
                "GetCustomerHistory1",
                true, queryResultSettings, null, OperationParameter.Create("CustometId", custometId, true));
        }
        
    }
    
    /// <summary>
    /// Class implements ItemBarCodes Manager.
    /// </summary>
    [GeneratedCodeAttribute("Uptail.Commerce.RetailProxy.Extension", "1.0")]
    internal class ItemBarCodesManager : IItemBarCodesManager
    {
        private IContext context;

        /// <summary>
        /// Initializes a new instance of the <see cref="ItemBarCodes"/> class.
        /// </summary>
        /// <param name="context">The context.</param>
        public ItemBarCodesManager(IContext context)
        {
            this.context = context;
        }

        /// <summary>
        /// Creates the specified entity.
        /// </summary>
        /// <param name="entity">The entity.</param>
        /// <returns>The updated entity after creation.</returns>
        public async Task<ItemBarCodes> Create(ItemBarCodes entity)
        {
            return await this.context.Create<ItemBarCodes>("ItemBarCodes", entity);
        }

        /// <summary>
        /// Reads the entity with specified identifier.
        /// </summary>
        /// <param name="barcode">The barcode.</param>
        /// <param name="expandProperties">The navigation properties to be expanded.</param>
        /// <returns>The entity.</returns>
        public async Task<ItemBarCodes> Read(string barcode, ICollection<string> expandProperties = null)
        {
            return await this.context.Read<ItemBarCodes>(
                    "ItemBarCodes",
                    e => e.Barcode == barcode,
                    expandProperties,
                    OperationParameter.Create("Barcode", barcode, true));
        }
      
        /// <summary>
        /// Read all entities with specified query settings.
        /// </summary>
        /// <param name="queryResultSettings">The query result settings.</param>
        /// <param name="expandProperties">The navigation properties to be expanded.</param>
        /// <returns>The collection of entities.</returns>
        public async Task<PagedResult<ItemBarCodes>> ReadAll(QueryResultSettings queryResultSettings, ICollection<string> expandProperties = null)
        {
            return await this.context.ReadAll<ItemBarCodes>("ItemBarCodes", expandProperties, queryResultSettings);
        }

        /// <summary>
        /// Updates the specified entity.
        /// </summary>
        /// <param name="entity">The entity.</param>
        /// <returns>The updated entity.</returns>
        public async Task<ItemBarCodes> Update(ItemBarCodes entity)
        {
            return await this.context.Update<ItemBarCodes>("ItemBarCodes", entity);
        }

        /// <summary>
        /// Deletes the specified entity.
        /// </summary>
        /// <param name="entity">The entity.</param>
        /// <returns>No return.</returns>
        public async Task Delete(ItemBarCodes entity)
        {
            await this.context.Delete<ItemBarCodes>("ItemBarCodes", entity);
        }
        
        // Operations
        
        /// <summary>
        /// GetItemBarCodes method.
        /// </summary>
        /// <param name="itemId">The itemId.</param>
        /// <param name="queryResultSettings">The queryResultSettings.</param>
        /// <returns>Collection of ItemBarCodes.</returns>
        public async Task<PagedResult<ItemBarCodes>> GetItemBarCodes(string itemId, QueryResultSettings queryResultSettings = null)
        {       
            return await this.context.ExecuteOperationAsync<ItemBarCodes>(
                "ItemBarCodes",
                "ItemBarCodes",
                "GetItemBarCodes",
                true, queryResultSettings, null, OperationParameter.Create("itemId", itemId, false));
        }
        
    }
    
 }
