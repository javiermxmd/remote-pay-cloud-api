/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var order_VoidReason = require("../order/VoidReason");
var remotemessage_Message = require("../remotemessage/Message");
var payments_Payment = require("../payments/Payment");

/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var VoidPaymentMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = VoidPaymentMessage;
  this.setMethod(remotemessage_Method["VOID_PAYMENT"]);
  this.payment = undefined;
  this.voidReason = undefined;
};

VoidPaymentMessage.prototype = Object.create(remotemessage_Message.prototype);
VoidPaymentMessage.prototype.constructor = VoidPaymentMessage;

/**
* Set the field value
* A payment
*
* @memberof remotemessage.VoidPaymentMessage
* @param {payments.Payment} payment 
*/
VoidPaymentMessage.prototype.setPayment = function(payment) {
  this.payment = payment;
};

/**
* Get the field value
* A payment
* @memberof remotemessage.VoidPaymentMessage
* @return {payments.Payment} 
*/
VoidPaymentMessage.prototype.getPayment = function() {
  return this.payment;
};

/**
* Set the field value
* @memberof remotemessage.VoidPaymentMessage
* @param {order.VoidReason} voidReason 
*/
VoidPaymentMessage.prototype.setVoidReason = function(voidReason) {
  this.voidReason = voidReason;
};

/**
* Get the field value
* @memberof remotemessage.VoidPaymentMessage
* @return {order.VoidReason} 
*/
VoidPaymentMessage.prototype.getVoidReason = function() {
  return this.voidReason;
};

VoidPaymentMessage._meta_ =  {fields:  {}};
VoidPaymentMessage._meta_.fields["payment"] = {};
VoidPaymentMessage._meta_.fields["payment"].type = payments_Payment;
VoidPaymentMessage._meta_.fields["voidReason"] = {};
VoidPaymentMessage._meta_.fields["voidReason"].type = order_VoidReason;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = VoidPaymentMessage;
}

