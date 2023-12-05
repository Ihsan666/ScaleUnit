
  /* tslint:disable */
  import { ProxyEntities } from "PosApi/Entities";
  // @ts-ignore
  import { DateExtensions } from "PosApi/TypeExtensions";
  export { ProxyEntities };

  export namespace Entities {
  
  /**
   * MagicBox entity class.
   */
  export class MagicBox {
      public BoxNumber: string;
	  public BoxName: string;
	  public BoxPurchased: boolean;
	  
      // Navigation properties names
      
      /**
       * Construct an object from odata response.
       * @param {any} odataObject The odata result object.
       */
      constructor(odataObject?: any) {
          odataObject = odataObject || {};
          
            this.BoxNumber = odataObject.BoxNumber;
              
            this.BoxName = odataObject.BoxName;
              
            this.BoxPurchased = odataObject.BoxPurchased;
              
      }
  }

  /**
   * CustomerHistory entity class.
   */
  export class CustomerHistory {
      public CustometId: string;
	  public StoreId: string;
	  public TransactionId: string;
	  public SalesDateTime: Date;
	  public Description: string;
	  public ItemNumber: string;
	  public Quantity: number;
	  public Price: number;
	  public Amount: number;
	  public Currency: string;
	  
      // Navigation properties names
      
      /**
       * Construct an object from odata response.
       * @param {any} odataObject The odata result object.
       */
      constructor(odataObject?: any) {
          odataObject = odataObject || {};
          
            this.CustometId = odataObject.CustometId;
              
            this.StoreId = odataObject.StoreId;
              
            this.TransactionId = odataObject.TransactionId;
              
            this.SalesDateTime = (odataObject.SalesDateTime instanceof Date) ? odataObject.SalesDateTime
                : (odataObject.SalesDateTime != null) ? DateExtensions.convertStringToDateObject(odataObject.SalesDateTime)  : undefined;
              
            this.Description = odataObject.Description;
              
            this.ItemNumber = odataObject.ItemNumber;
              
            this.Quantity = (odataObject.Quantity != null) ? parseFloat(odataObject.Quantity) : undefined;
              
            this.Price = (odataObject.Price != null) ? parseFloat(odataObject.Price) : undefined;
              
            this.Amount = (odataObject.Amount != null) ? parseFloat(odataObject.Amount) : undefined;
              
            this.Currency = odataObject.Currency;
              
      }
  }

  /**
   * ItemBarCodes entity class.
   */
  export class ItemBarCodes {
      public Barcode: string;
	  public ItemId: string;
	  public RetailVariantId: string;
	  public ExtensionProperties: ProxyEntities.CommerceProperty[];
	  
      // Navigation properties names
      
      /**
       * Construct an object from odata response.
       * @param {any} odataObject The odata result object.
       */
      constructor(odataObject?: any) {
          odataObject = odataObject || {};
          
            this.Barcode = odataObject.Barcode;
              
            this.ItemId = odataObject.ItemId;
              
            this.RetailVariantId = odataObject.RetailVariantId;
              
        this.ExtensionProperties = undefined;
        if (odataObject.ExtensionProperties) {
        this.ExtensionProperties = [];
        for (var i = 0; i < odataObject.ExtensionProperties.length; i++) {
        if (odataObject.ExtensionProperties[i] != null) {
        if (odataObject.ExtensionProperties[i]['@odata.type'] != null) {
        var className: string = odataObject.ExtensionProperties[i]['@odata.type'];
        className = className.substr(className.lastIndexOf('.') + 1).concat("Class");
        // @ts-ignore
        this.ExtensionProperties[i] = new ProxyEntities[className](odataObject.ExtensionProperties[i])
        } else {
        this.ExtensionProperties[i] = new ProxyEntities.CommercePropertyClass(odataObject.ExtensionProperties[i]);
        }
                    } else {
        this.ExtensionProperties[i] = undefined;
        }
        }
        }
      
      }
  }

  /**
   * LegacySalesTransaction entity class.
   */
  export class LegacySalesTransaction {
      public StoreId: string;
	  public TransactionId: string;
	  public SalesDateTime: Date;
	  public Description: string;
	  public ItemNumber: string;
	  public Quantity: number;
	  public Price: number;
	  public Amount: number;
	  public Currency: string;
	  
      // Navigation properties names
      
      /**
       * Construct an object from odata response.
       * @param {any} odataObject The odata result object.
       */
      constructor(odataObject?: any) {
          odataObject = odataObject || {};
          
            this.StoreId = odataObject.StoreId;
              
            this.TransactionId = odataObject.TransactionId;
              
            this.SalesDateTime = (odataObject.SalesDateTime instanceof Date) ? odataObject.SalesDateTime
                : (odataObject.SalesDateTime != null) ? DateExtensions.convertStringToDateObject(odataObject.SalesDateTime)  : undefined;
              
            this.Description = odataObject.Description;
              
            this.ItemNumber = odataObject.ItemNumber;
              
            this.Quantity = (odataObject.Quantity != null) ? parseFloat(odataObject.Quantity) : undefined;
              
            this.Price = (odataObject.Price != null) ? parseFloat(odataObject.Price) : undefined;
              
            this.Amount = (odataObject.Amount != null) ? parseFloat(odataObject.Amount) : undefined;
              
            this.Currency = odataObject.Currency;
              
      }
  }

}
