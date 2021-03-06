/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var payments_Batch = require("../payments/Batch");
var remotepay_BaseResponse = require("../remotepay/BaseResponse");

/** The result of a request to do a closeout */
/**
* @constructor
* @augments remotepay.BaseResponse
* @memberof remotepay
*/
var CloseoutResponse = function() {
  remotepay_BaseResponse.call(this);
  this._superClass_ = remotepay_BaseResponse;
  this._class_ = CloseoutResponse;
  this.batch = undefined;
};

CloseoutResponse.prototype = Object.create(remotepay_BaseResponse.prototype);
CloseoutResponse.prototype.constructor = CloseoutResponse;

/**
* Set the field value
* The batch that was closed out.
*
* @memberof remotepay.CloseoutResponse
* @param {payments.Batch} batch 
*/
CloseoutResponse.prototype.setBatch = function(batch) {
  this.batch = batch;
};

/**
* Get the field value
* The batch that was closed out.
* @memberof remotepay.CloseoutResponse
* @return {payments.Batch} 
*/
CloseoutResponse.prototype.getBatch = function() {
  return this.batch;
};

CloseoutResponse._meta_ =  {fields:  {}};
CloseoutResponse._meta_._class_ =  CloseoutResponse;
CloseoutResponse._meta_._superMeta_ = remotepay_BaseResponse._meta_;
CloseoutResponse._meta_.fields["batch"] = {};
CloseoutResponse._meta_.fields["batch"].type = payments_Batch;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = CloseoutResponse;
}

