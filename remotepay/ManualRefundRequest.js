/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotepay_TransactionType = require("../remotepay/TransactionType");
var remotepay_TransactionRequest = require("../remotepay/TransactionRequest");

/**
* @constructor
* @augments remotepay.TransactionRequest
* @memberof remotepay
*/
var ManualRefundRequest = function() {
  remotepay_TransactionRequest.call(this);
  this._superClass_ = remotepay_TransactionRequest;
  this._class_ = ManualRefundRequest;
  this.setType(remotepay_TransactionType["CREDIT"]);
};

ManualRefundRequest.prototype = Object.create(remotepay_TransactionRequest.prototype);
ManualRefundRequest.prototype.constructor = ManualRefundRequest;

ManualRefundRequest._meta_ =  {fields:  {}};

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = ManualRefundRequest;
}

