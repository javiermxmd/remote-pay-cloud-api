
module.exports.remotemessage = remotemessage;
/**
* @namespace remotemessage
*/
function remotemessage() {}


remotemessage.AcknowledgementMessage = require("./AcknowledgementMessage");
remotemessage.ActivityMessageFromActivity = require("./ActivityMessageFromActivity");
remotemessage.ActivityMessageToActivity = require("./ActivityMessageToActivity");
remotemessage.ActivityRequest = require("./ActivityRequest");
remotemessage.ActivityResponseMessage = require("./ActivityResponseMessage");
remotemessage.AddDiscountAction = require("./AddDiscountAction");
remotemessage.AddLineItemAction = require("./AddLineItemAction");
remotemessage.BreakMessage = require("./BreakMessage");
remotemessage.CapturePreAuthMessage = require("./CapturePreAuthMessage");
remotemessage.CapturePreAuthResponseMessage = require("./CapturePreAuthResponseMessage");
remotemessage.CardDataRequestMessage = require("./CardDataRequestMessage");
remotemessage.CardDataResponseMessage = require("./CardDataResponseMessage");
remotemessage.CashbackSelectedMessage = require("./CashbackSelectedMessage");
remotemessage.CloseoutRequestMessage = require("./CloseoutRequestMessage");
remotemessage.CloseoutResponseMessage = require("./CloseoutResponseMessage");
remotemessage.ConfirmPaymentMessage = require("./ConfirmPaymentMessage");
remotemessage.DiscoveryRequestMessage = require("./DiscoveryRequestMessage");
remotemessage.DiscoveryResponseMessage = require("./DiscoveryResponseMessage");
remotemessage.ErrorCode = require("./ErrorCode");
remotemessage.ErrorCodeEnum = require("./ErrorCodeEnum");
remotemessage.ExternalDeviceState = require("./ExternalDeviceState");
remotemessage.ExternalDeviceStateData = require("./ExternalDeviceStateData");
remotemessage.ExternalDeviceStateEnum = require("./ExternalDeviceStateEnum");
remotemessage.ExternalDeviceSubState = require("./ExternalDeviceSubState");
remotemessage.FinishCancelMessage = require("./FinishCancelMessage");
remotemessage.FinishOkMessage = require("./FinishOkMessage");
remotemessage.ForceConnectMessage = require("./ForceConnectMessage");
remotemessage.GetPrintersRequestMessage = require("./GetPrintersRequestMessage");
remotemessage.GetPrintersResponseMessage = require("./GetPrintersResponseMessage");
remotemessage.ImagePrintMessage = require("./ImagePrintMessage");
remotemessage.InputOption = require("./InputOption");
remotemessage.KeyPress = require("./KeyPress");
remotemessage.KeyPressEnum = require("./KeyPressEnum");
remotemessage.KeyPressMessage = require("./KeyPressMessage");
remotemessage.LastMessageRequestMessage = require("./LastMessageRequestMessage");
remotemessage.LastMessageResponseMessage = require("./LastMessageResponseMessage");
remotemessage.LogLevelEnum = require("./LogLevelEnum");
remotemessage.LogMessage = require("./LogMessage");
remotemessage.Message = require("./Message");
remotemessage.Method = require("./Method");
remotemessage.OpenCashDrawerMessage = require("./OpenCashDrawerMessage");
remotemessage.OrderActionAddDiscountMessage = require("./OrderActionAddDiscountMessage");
remotemessage.OrderActionAddLineItemMessage = require("./OrderActionAddLineItemMessage");
remotemessage.OrderActionRemoveDiscountMessage = require("./OrderActionRemoveDiscountMessage");
remotemessage.OrderActionRemoveLineItemMessage = require("./OrderActionRemoveLineItemMessage");
remotemessage.OrderActionResponse = require("./OrderActionResponse");
remotemessage.OrderActionResponseMessage = require("./OrderActionResponseMessage");
remotemessage.OrderUpdateMessage = require("./OrderUpdateMessage");
remotemessage.PairingCodeMessage = require("./PairingCodeMessage");
remotemessage.PairingRequestMessage = require("./PairingRequestMessage");
remotemessage.PairingResponseMessage = require("./PairingResponseMessage");
remotemessage.PairingState = require("./PairingState");
remotemessage.PartialAuthMessage = require("./PartialAuthMessage");
remotemessage.PayIntent = require("./PayIntent");
remotemessage.PaymentConfirmedMessage = require("./PaymentConfirmedMessage");
remotemessage.PaymentRejectedMessage = require("./PaymentRejectedMessage");
remotemessage.PaymentVoidedMessage = require("./PaymentVoidedMessage");
remotemessage.PrintJobStatusRequestMessage = require("./PrintJobStatusRequestMessage");
remotemessage.PrintJobStatusResponseMessage = require("./PrintJobStatusResponseMessage");
remotemessage.QueryStatus = require("./QueryStatus");
remotemessage.QueryStatusEnum = require("./QueryStatusEnum");
remotemessage.RefundRequestMessage = require("./RefundRequestMessage");
remotemessage.RefundResponseMessage = require("./RefundResponseMessage");
remotemessage.RemoteError = require("./RemoteError");
remotemessage.RemoteMessage = require("./RemoteMessage");
remotemessage.RemoteMessageType = require("./RemoteMessageType");
remotemessage.RemoveDiscountAction = require("./RemoveDiscountAction");
remotemessage.RemoveLineItemAction = require("./RemoveLineItemAction");
remotemessage.ResetDeviceResponseMessage = require("./ResetDeviceResponseMessage");
remotemessage.ResetMessage = require("./ResetMessage");
remotemessage.ResultStatus = require("./ResultStatus");
remotemessage.ResultStatusEnum = require("./ResultStatusEnum");
remotemessage.RetrieveCustomActivitiesRequestMessage = require("./RetrieveCustomActivitiesRequestMessage");
remotemessage.RetrieveCustomActivitiesResponseMessage = require("./RetrieveCustomActivitiesResponseMessage");
remotemessage.RetrieveDeviceStatusRequestMessage = require("./RetrieveDeviceStatusRequestMessage");
remotemessage.RetrieveDeviceStatusResponseMessage = require("./RetrieveDeviceStatusResponseMessage");
remotemessage.RetrievePaymentRequestMessage = require("./RetrievePaymentRequestMessage");
remotemessage.RetrievePaymentResponseMessage = require("./RetrievePaymentResponseMessage");
remotemessage.RetrievePendingPaymentsMessage = require("./RetrievePendingPaymentsMessage");
remotemessage.RetrievePendingPaymentsResponseMessage = require("./RetrievePendingPaymentsResponseMessage");
remotemessage.ShowPaymentReceiptOptionsMessage = require("./ShowPaymentReceiptOptionsMessage");
remotemessage.ShutDownMessage = require("./ShutDownMessage");
remotemessage.SignatureVerifiedMessage = require("./SignatureVerifiedMessage");
remotemessage.TerminalMessage = require("./TerminalMessage");
remotemessage.TextPrintMessage = require("./TextPrintMessage");
remotemessage.ThankYouMessage = require("./ThankYouMessage");
remotemessage.TipAddedMessage = require("./TipAddedMessage");
remotemessage.TipAdjustMessage = require("./TipAdjustMessage");
remotemessage.TipAdjustResponseMessage = require("./TipAdjustResponseMessage");
remotemessage.TransactionType = require("./TransactionType");
remotemessage.TxStartRequestMessage = require("./TxStartRequestMessage");
remotemessage.TxStartResponseMessage = require("./TxStartResponseMessage");
remotemessage.TxStartResponseResult = require("./TxStartResponseResult");
remotemessage.TxState = require("./TxState");
remotemessage.TxStateEnum = require("./TxStateEnum");
remotemessage.TxStateMessage = require("./TxStateMessage");
remotemessage.UiDirection = require("./UiDirection");
remotemessage.UiState = require("./UiState");
remotemessage.UiStateMessage = require("./UiStateMessage");
remotemessage.VaultCardMessage = require("./VaultCardMessage");
remotemessage.VaultCardResponseMessage = require("./VaultCardResponseMessage");
remotemessage.VerifySignatureMessage = require("./VerifySignatureMessage");
remotemessage.VoidPaymentMessage = require("./VoidPaymentMessage");
remotemessage.WelcomeMessage = require("./WelcomeMessage.js");

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = remotemessage;
}
    