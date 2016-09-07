/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var order_operation_DiscountsAddedOperation = require("../order/operation/DiscountsAddedOperation");
var order_operation_OrderDeletedOperation = require("../order/operation/OrderDeletedOperation");
var remotemessage_Message = require("../remotemessage/Message");
var order_operation_LineItemsAddedOperation = require("../order/operation/LineItemsAddedOperation");
var order_operation_LineItemsDeletedOperation = require("../order/operation/LineItemsDeletedOperation");
var order_DisplayOrder = require("../order/DisplayOrder");
var order_operation_DiscountsDeletedOperation = require("../order/operation/DiscountsDeletedOperation");

/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var OrderUpdateMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = OrderUpdateMessage;
  this.setMethod(remotemessage_Method["SHOW_ORDER_SCREEN"]);
  this.order = undefined;
  this.lineItemsAddedOperation = undefined;
  this.lineItemsDeletedOperation = undefined;
  this.discountsAddedOperation = undefined;
  this.discountsDeletedOperation = undefined;
  this.orderDeletedOperation = undefined;
};

OrderUpdateMessage.prototype = Object.create(remotemessage_Message.prototype);
OrderUpdateMessage.prototype.constructor = OrderUpdateMessage;

/**
* Set the field value
* The order that is to be displayed.
*
* @memberof remotemessage.OrderUpdateMessage
* @param {order.DisplayOrder} order 
*/
OrderUpdateMessage.prototype.setOrder = function(order) {
  this.order = order;
};

/**
* Get the field value
* The order that is to be displayed.
* @memberof remotemessage.OrderUpdateMessage
* @return {order.DisplayOrder} 
*/
OrderUpdateMessage.prototype.getOrder = function() {
  return this.order;
};

/**
* Set the field value
* Items that were added to the display order.
*
* @memberof remotemessage.OrderUpdateMessage
* @param {order.operation.LineItemsAddedOperation} lineItemsAddedOperation 
*/
OrderUpdateMessage.prototype.setLineItemsAddedOperation = function(lineItemsAddedOperation) {
  this.lineItemsAddedOperation = lineItemsAddedOperation;
};

/**
* Get the field value
* Items that were added to the display order.
* @memberof remotemessage.OrderUpdateMessage
* @return {order.operation.LineItemsAddedOperation} 
*/
OrderUpdateMessage.prototype.getLineItemsAddedOperation = function() {
  return this.lineItemsAddedOperation;
};

/**
* Set the field value
* Items that were added to the display order.
*
* @memberof remotemessage.OrderUpdateMessage
* @param {order.operation.LineItemsDeletedOperation} lineItemsDeletedOperation 
*/
OrderUpdateMessage.prototype.setLineItemsDeletedOperation = function(lineItemsDeletedOperation) {
  this.lineItemsDeletedOperation = lineItemsDeletedOperation;
};

/**
* Get the field value
* Items that were added to the display order.
* @memberof remotemessage.OrderUpdateMessage
* @return {order.operation.LineItemsDeletedOperation} 
*/
OrderUpdateMessage.prototype.getLineItemsDeletedOperation = function() {
  return this.lineItemsDeletedOperation;
};

/**
* Set the field value
* Items that were added to the display order.
*
* @memberof remotemessage.OrderUpdateMessage
* @param {order.operation.DiscountsAddedOperation} discountsAddedOperation 
*/
OrderUpdateMessage.prototype.setDiscountsAddedOperation = function(discountsAddedOperation) {
  this.discountsAddedOperation = discountsAddedOperation;
};

/**
* Get the field value
* Items that were added to the display order.
* @memberof remotemessage.OrderUpdateMessage
* @return {order.operation.DiscountsAddedOperation} 
*/
OrderUpdateMessage.prototype.getDiscountsAddedOperation = function() {
  return this.discountsAddedOperation;
};

/**
* Set the field value
* Items that were added to the display order.
*
* @memberof remotemessage.OrderUpdateMessage
* @param {order.operation.DiscountsDeletedOperation} discountsDeletedOperation 
*/
OrderUpdateMessage.prototype.setDiscountsDeletedOperation = function(discountsDeletedOperation) {
  this.discountsDeletedOperation = discountsDeletedOperation;
};

/**
* Get the field value
* Items that were added to the display order.
* @memberof remotemessage.OrderUpdateMessage
* @return {order.operation.DiscountsDeletedOperation} 
*/
OrderUpdateMessage.prototype.getDiscountsDeletedOperation = function() {
  return this.discountsDeletedOperation;
};

/**
* Set the field value
* Items that were added to the display order.
*
* @memberof remotemessage.OrderUpdateMessage
* @param {order.operation.OrderDeletedOperation} orderDeletedOperation 
*/
OrderUpdateMessage.prototype.setOrderDeletedOperation = function(orderDeletedOperation) {
  this.orderDeletedOperation = orderDeletedOperation;
};

/**
* Get the field value
* Items that were added to the display order.
* @memberof remotemessage.OrderUpdateMessage
* @return {order.operation.OrderDeletedOperation} 
*/
OrderUpdateMessage.prototype.getOrderDeletedOperation = function() {
  return this.orderDeletedOperation;
};

OrderUpdateMessage._meta_ =  {fields:  {}};
OrderUpdateMessage._meta_.fields["order"] = {};
OrderUpdateMessage._meta_.fields["order"].type = order_DisplayOrder;
OrderUpdateMessage._meta_.fields["lineItemsAddedOperation"] = {};
OrderUpdateMessage._meta_.fields["lineItemsAddedOperation"].type = order_operation_LineItemsAddedOperation;
OrderUpdateMessage._meta_.fields["lineItemsDeletedOperation"] = {};
OrderUpdateMessage._meta_.fields["lineItemsDeletedOperation"].type = order_operation_LineItemsDeletedOperation;
OrderUpdateMessage._meta_.fields["discountsAddedOperation"] = {};
OrderUpdateMessage._meta_.fields["discountsAddedOperation"].type = order_operation_DiscountsAddedOperation;
OrderUpdateMessage._meta_.fields["discountsDeletedOperation"] = {};
OrderUpdateMessage._meta_.fields["discountsDeletedOperation"].type = order_operation_DiscountsDeletedOperation;
OrderUpdateMessage._meta_.fields["orderDeletedOperation"] = {};
OrderUpdateMessage._meta_.fields["orderDeletedOperation"].type = order_operation_OrderDeletedOperation;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = OrderUpdateMessage;
}

