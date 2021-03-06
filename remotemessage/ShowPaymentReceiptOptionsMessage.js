/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_Message = require("../remotemessage/Message");

/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var ShowPaymentReceiptOptionsMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = ShowPaymentReceiptOptionsMessage;
  this.setMethod(remotemessage_Method["SHOW_PAYMENT_RECEIPT_OPTIONS"]);
  this.orderId = undefined;
  this.paymentId = undefined;
};

ShowPaymentReceiptOptionsMessage.prototype = Object.create(remotemessage_Message.prototype);
ShowPaymentReceiptOptionsMessage.prototype.constructor = ShowPaymentReceiptOptionsMessage;

/**
* Set the field value
* Unique identifier for a order
*
* @memberof remotemessage.ShowPaymentReceiptOptionsMessage
* @param {String} orderId 
*/
ShowPaymentReceiptOptionsMessage.prototype.setOrderId = function(orderId) {
  this.orderId = orderId;
};

/**
* Get the field value
* Unique identifier for a order
* @memberof remotemessage.ShowPaymentReceiptOptionsMessage
* @return {String} 
*/
ShowPaymentReceiptOptionsMessage.prototype.getOrderId = function() {
  return this.orderId;
};

/**
* Set the field value
* Unique identifier for a payment
*
* @memberof remotemessage.ShowPaymentReceiptOptionsMessage
* @param {String} paymentId 
*/
ShowPaymentReceiptOptionsMessage.prototype.setPaymentId = function(paymentId) {
  this.paymentId = paymentId;
};

/**
* Get the field value
* Unique identifier for a payment
* @memberof remotemessage.ShowPaymentReceiptOptionsMessage
* @return {String} 
*/
ShowPaymentReceiptOptionsMessage.prototype.getPaymentId = function() {
  return this.paymentId;
};

ShowPaymentReceiptOptionsMessage._meta_ =  {fields:  {}};
ShowPaymentReceiptOptionsMessage._meta_._class_ =  ShowPaymentReceiptOptionsMessage;
ShowPaymentReceiptOptionsMessage._meta_._superMeta_ = remotemessage_Message._meta_;
ShowPaymentReceiptOptionsMessage._meta_.fields["orderId"] = {};
ShowPaymentReceiptOptionsMessage._meta_.fields["orderId"].type = String;
ShowPaymentReceiptOptionsMessage._meta_.fields["paymentId"] = {};
ShowPaymentReceiptOptionsMessage._meta_.fields["paymentId"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = ShowPaymentReceiptOptionsMessage;
}

