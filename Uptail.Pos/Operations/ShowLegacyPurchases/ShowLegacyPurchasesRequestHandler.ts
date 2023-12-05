import { ExtensionOperationRequestType, ExtensionOperationRequestHandlerBase } from "PosApi/Create/Operations";
import { ShowLegacyPurchasesOperationRequest, ShowLegacyPurchasesOperationResponse } from "../../OperationRequests";
import { ClientEntities } from "PosApi/Entities"; 
import { SalesTransactionsManager } from "../../Managers/SalesTransactionsManager";
import DialogUtilities from "../../Utils/DialogUtilities";
import { isNullEmptyOrWhitespace } from "../../Utils/StringUtilities";
import { GetCustomerClientRequest, GetCustomerClientResponse } from "PosApi/Consume/Customer";

export default class ShowLegacyPurchasesRequestHandler
    <TResponse extends ShowLegacyPurchasesOperationResponse> extends ExtensionOperationRequestHandlerBase<TResponse> {

    public supportedRequestType(): ExtensionOperationRequestType<TResponse> {
        return ShowLegacyPurchasesOperationRequest;
    }

    public async executeAsync(request: ShowLegacyPurchasesOperationRequest<TResponse>): Promise<ClientEntities.ICancelableDataResult<TResponse>> {
     
        const dialogResponse = await DialogUtilities.showAlfaNumericDialog(this.context,
            "Scan or enter customer",
            "Customer account number",
            "Scan or enter customer account number");

        const customerIdEntryResult = dialogResponse.data && dialogResponse.data.result && dialogResponse.data.result.value;//by ihsan

       
        let getCurrentCustomerClientRequest: GetCustomerClientRequest<GetCustomerClientResponse> = new GetCustomerClientRequest(dialogResponse.data.result.value);
        var _result = await this.context.runtime.executeAsync<GetCustomerClientResponse>(getCurrentCustomerClientRequest);
        if (_result.data.result.Blocked != true) {
            if (!isNullEmptyOrWhitespace(customerIdEntryResult)) {
                var manager = new SalesTransactionsManager(this.context, this.context.logger.getNewCorrelationId());

                var transactionsResult = await manager.readLegacyTransactions(customerIdEntryResult);

                if (transactionsResult != null && !transactionsResult.canceled && transactionsResult.data != undefined && transactionsResult.data.length != 0) {
                    this.context.navigator.navigate("ShowLegacyPurchasesView", { transactions: transactionsResult.data });
                }
                else {

                    await DialogUtilities.showInfoMessage(this.context, "Not Found", "Customer Not Found in legacy data.");
                }
            }
        } else {
            await DialogUtilities.showInfoMessage(this.context, "Blocked", "This Customer is blocked.");
        }
       


        let response: ShowLegacyPurchasesOperationResponse = new ShowLegacyPurchasesOperationResponse(); 
        return Promise.resolve(<ClientEntities.ICancelableDataResult<TResponse>>{
            canceled: false,
            data: response
        });
    }
}