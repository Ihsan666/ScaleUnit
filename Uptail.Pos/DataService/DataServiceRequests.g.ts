
/* tslint:disable */
import { ProxyEntities } from "PosApi/Entities";

import { Entities } from "./DataServiceEntities.g";

import { DataServiceRequest, DataServiceResponse } from "PosApi/Consume/DataService";
export { ProxyEntities };

export { Entities };

  export namespace StoreOperations {

  export class UptailSearchLegacyPurchasesResponse extends DataServiceResponse {
    public result: Entities.LegacySalesTransaction[];
  }

  export class UptailSearchLegacyPurchasesRequest<TResponse extends UptailSearchLegacyPurchasesResponse> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor(customerAccountId: string) {
        super();

        this._entitySet = "";
        this._entityType = "";
        this._method = "UptailSearchLegacyPurchases";
        this._parameters = { customerAccountId: customerAccountId };
        this._isAction = true;
        this._returnType = Entities.LegacySalesTransaction;
        this._isReturnTypeCollection = true;
        
      }
  }

}

export namespace DeserveMagicBox {
  // Entity Set MagicBox
  export class GetMagicBoxDetailsResponse extends DataServiceResponse {
    public result: Entities.MagicBox;
  }

  export class GetMagicBoxDetailsRequest<TResponse extends GetMagicBoxDetailsResponse> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor(boxNumber: string) {
        super();

        this._entitySet = "DeserveMagicBox";
        this._entityType = "MagicBox";
        this._method = "GetMagicBoxDetails";
        this._parameters = {  };
        this._isAction = true;
        this._returnType = Entities.MagicBox;
        this._isReturnTypeCollection = false;
        this._keys = { BoxNumber: boxNumber };
      }
  }

  export class updateMagicBoxResponse extends DataServiceResponse {
    public result: Entities.MagicBox;
  }

  export class updateMagicBoxRequest<TResponse extends updateMagicBoxResponse> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor(boxNumber: string) {
        super();

        this._entitySet = "DeserveMagicBox";
        this._entityType = "MagicBox";
        this._method = "updateMagicBox";
        this._parameters = {  };
        this._isAction = true;
        this._returnType = Entities.MagicBox;
        this._isReturnTypeCollection = false;
        this._keys = { BoxNumber: boxNumber };
      }
  }

  export class GetAllMagicBoxesResponse extends DataServiceResponse {
    public result: Entities.MagicBox[];
  }

  export class GetAllMagicBoxesRequest<TResponse extends GetAllMagicBoxesResponse> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor() {
        super();

        this._entitySet = "DeserveMagicBox";
        this._entityType = "MagicBox";
        this._method = "GetAllMagicBoxes";
        this._parameters = {  };
        this._isAction = true;
        this._returnType = Entities.MagicBox;
        this._isReturnTypeCollection = true;
        
      }
  }

}

export namespace CustomerHistory {
  // Entity Set CustomerHistory
  export class GetCustomerHistory1Response extends DataServiceResponse {
    public result: Entities.CustomerHistory[];
  }

  export class GetCustomerHistory1Request<TResponse extends GetCustomerHistory1Response> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor(custometId: string) {
        super();

        this._entitySet = "CustomerHistory";
        this._entityType = "CustomerHistory";
        this._method = "GetCustomerHistory1";
        this._parameters = {  };
        this._isAction = true;
        this._returnType = Entities.CustomerHistory;
        this._isReturnTypeCollection = true;
        this._keys = { CustometId: custometId };
      }
  }

}

export namespace ItemBarCodes {
  // Entity Set ItemBarCodes
  export class GetItemBarCodesResponse extends DataServiceResponse {
    public result: Entities.ItemBarCodes[];
  }

  export class GetItemBarCodesRequest<TResponse extends GetItemBarCodesResponse> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor(itemId: string) {
        super();

        this._entitySet = "ItemBarCodes";
        this._entityType = "ItemBarCodes";
        this._method = "GetItemBarCodes";
        this._parameters = { itemId: itemId };
        this._isAction = true;
        this._returnType = Entities.ItemBarCodes;
        this._isReturnTypeCollection = true;
        
      }
  }

}
