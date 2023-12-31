// <auto-generated />
namespace Uptail.Commerce.RetailProxy.Extension
{
    using System;
    using System.CodeDom.Compiler;
    using System.Collections.Generic;
    using System.Collections.ObjectModel;
    using System.IO;
    using System.Threading.Tasks;
    using Microsoft.Dynamics.Commerce.RetailProxy;

    
    /// <summary>
    /// Interface for Store Operations Manager.
    /// </summary>
    [GeneratedCodeAttribute("Uptail.Commerce.RetailProxy.Extension", "1.0")]
    public interface IStoreOperationsManager : IEntityManager
    {
        
        /// <summary>
        /// UptailSearchLegacyPurchases method.
        /// </summary>
        /// <param name="customerAccountId">The customerAccountId.</param>
        /// <param name="queryResultSettings">The queryResultSettings.</param>
        /// <returns>Collection of LegacySalesTransaction.</returns>
        Task<PagedResult<LegacySalesTransaction>> UptailSearchLegacyPurchases(string customerAccountId, QueryResultSettings queryResultSettings = null);
    
    }
    
    /// <summary>
    /// Interface for MagicBox Manager.
    /// </summary>
    [GeneratedCodeAttribute("Uptail.Commerce.RetailProxy.Extension", "1.0")]
    public interface IMagicBoxManager : IEntityManager
    {
        
        /// <summary>
        /// GetMagicBoxDetails method.
        /// </summary>
        /// <param name="boxNumber">The boxNumber.</param>
        /// <returns>MagicBox object.</returns>
        Task<MagicBox> GetMagicBoxDetails(string boxNumber);
    
        /// <summary>
        /// updateMagicBox method.
        /// </summary>
        /// <param name="boxNumber">The boxNumber.</param>
        /// <returns>MagicBox object.</returns>
        Task<MagicBox> updateMagicBox(string boxNumber);
    
        /// <summary>
        /// GetAllMagicBoxes method.
        /// </summary>
        /// <param name="queryResultSettings">The queryResultSettings.</param>
        /// <returns>Collection of MagicBox.</returns>
        Task<PagedResult<MagicBox>> GetAllMagicBoxes(QueryResultSettings queryResultSettings = null);
    
    }
    
    /// <summary>
    /// Interface for CustomerHistory Manager.
    /// </summary>
    [GeneratedCodeAttribute("Uptail.Commerce.RetailProxy.Extension", "1.0")]
    public interface ICustomerHistoryManager : IEntityManager
    {
        
        /// <summary>
        /// GetCustomerHistory1 method.
        /// </summary>
        /// <param name="custometId">The custometId.</param>
        /// <param name="queryResultSettings">The queryResultSettings.</param>
        /// <returns>Collection of CustomerHistory.</returns>
        Task<PagedResult<CustomerHistory>> GetCustomerHistory1(string custometId, QueryResultSettings queryResultSettings = null);
    
    }
    
    /// <summary>
    /// Interface for ItemBarCodes Manager.
    /// </summary>
    [GeneratedCodeAttribute("Uptail.Commerce.RetailProxy.Extension", "1.0")]
    public interface IItemBarCodesManager : IEntityManager
    {
        
        /// <summary>
        /// GetItemBarCodes method.
        /// </summary>
        /// <param name="itemId">The itemId.</param>
        /// <param name="queryResultSettings">The queryResultSettings.</param>
        /// <returns>Collection of ItemBarCodes.</returns>
        Task<PagedResult<ItemBarCodes>> GetItemBarCodes(string itemId, QueryResultSettings queryResultSettings = null);
    
    }
    
 }
