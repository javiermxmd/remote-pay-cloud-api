/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var order_LineItem = require("../order/LineItem");
var base_Reference = require("../base/Reference");

/** For reporting on a removed line item */
/**
* @constructor
* @memberof order
*/
var VoidedLineItem = function() {
  this._class_ = VoidedLineItem;
  this.lineItem = undefined;
  this.merchant = undefined;
  this.reason = undefined;
  this.removedBy = undefined;
  this.createdBy = undefined;
  this.deletedTime = undefined;
  this.environment = undefined;
};


/**
* Set the field value
* The line item that was voided
*
* @memberof order.VoidedLineItem
* @param {order.LineItem} lineItem 
*/
VoidedLineItem.prototype.setLineItem = function(lineItem) {
  this.lineItem = lineItem;
};

/**
* Get the field value
* The line item that was voided
* @memberof order.VoidedLineItem
* @return {order.LineItem} 
*/
VoidedLineItem.prototype.getLineItem = function() {
  return this.lineItem;
};

/**
* Set the field value
* @memberof order.VoidedLineItem
* @param {base.Reference} merchant 
*/
VoidedLineItem.prototype.setMerchant = function(merchant) {
  this.merchant = merchant;
};

/**
* Get the field value
* @memberof order.VoidedLineItem
* @return {base.Reference} 
*/
VoidedLineItem.prototype.getMerchant = function() {
  return this.merchant;
};

/**
* Set the field value
* Why was the line item voided
*
* @memberof order.VoidedLineItem
* @param {Null|String} reason 
*/
VoidedLineItem.prototype.setReason = function(reason) {
  this.reason = reason;
};

/**
* Get the field value
* Why was the line item voided
* @memberof order.VoidedLineItem
* @return {Null|String} 
*/
VoidedLineItem.prototype.getReason = function() {
  return this.reason;
};

/**
* Set the field value
* Employee who voided the item
*
* @memberof order.VoidedLineItem
* @param {base.Reference} removedBy 
*/
VoidedLineItem.prototype.setRemovedBy = function(removedBy) {
  this.removedBy = removedBy;
};

/**
* Get the field value
* Employee who voided the item
* @memberof order.VoidedLineItem
* @return {base.Reference} 
*/
VoidedLineItem.prototype.getRemovedBy = function() {
  return this.removedBy;
};

/**
* Set the field value
* Employee who created the order from which the line item was voided
*
* @memberof order.VoidedLineItem
* @param {base.Reference} createdBy 
*/
VoidedLineItem.prototype.setCreatedBy = function(createdBy) {
  this.createdBy = createdBy;
};

/**
* Get the field value
* Employee who created the order from which the line item was voided
* @memberof order.VoidedLineItem
* @return {base.Reference} 
*/
VoidedLineItem.prototype.getCreatedBy = function() {
  return this.createdBy;
};

/**
* Set the field value
* Timestamp of when this line item was deleted
*
* @memberof order.VoidedLineItem
* @param {Number} deletedTime must be a long integer
*/
VoidedLineItem.prototype.setDeletedTime = function(deletedTime) {
  this.deletedTime = deletedTime;
};

/**
* Get the field value
* Timestamp of when this line item was deleted
* @memberof order.VoidedLineItem
* @return {Number} must be a long integer
*/
VoidedLineItem.prototype.getDeletedTime = function() {
  return this.deletedTime;
};

/**
* Set the field value
* Which environment was this recorded in
*
* @memberof order.VoidedLineItem
* @param {Null|String} environment 
*/
VoidedLineItem.prototype.setEnvironment = function(environment) {
  this.environment = environment;
};

/**
* Get the field value
* Which environment was this recorded in
* @memberof order.VoidedLineItem
* @return {Null|String} 
*/
VoidedLineItem.prototype.getEnvironment = function() {
  return this.environment;
};

/**
* @memberof order.VoidedLineItem
* @private
*/
VoidedLineItem.prototype.getMetaInfo = function(fieldName) {
  var curclass = this._class_;
  do {
    var fieldMetaInfo = curclass._meta_.fields[fieldName];
    if(fieldMetaInfo) {
      return fieldMetaInfo;
    }
    curclass = curclass.superclass;
  } while(curclass);
  return null;
};

VoidedLineItem.prototype.toString = function() {
  return JSON.stringify(this);
};

VoidedLineItem._meta_ =  {fields:  {}};
VoidedLineItem._meta_.fields["lineItem"] = {};
VoidedLineItem._meta_.fields["lineItem"].type = order_LineItem;
VoidedLineItem._meta_.fields["merchant"] = {};
VoidedLineItem._meta_.fields["merchant"].type = base_Reference;
VoidedLineItem._meta_.fields["reason"] = {};
VoidedLineItem._meta_.fields["reason"].type = String;
VoidedLineItem._meta_.fields["removedBy"] = {};
VoidedLineItem._meta_.fields["removedBy"].type = base_Reference;
VoidedLineItem._meta_.fields["createdBy"] = {};
VoidedLineItem._meta_.fields["createdBy"].type = base_Reference;
VoidedLineItem._meta_.fields["deletedTime"] = {};
VoidedLineItem._meta_.fields["deletedTime"].type = Number;
VoidedLineItem._meta_.fields["environment"] = {};
VoidedLineItem._meta_.fields["environment"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = VoidedLineItem;
}

