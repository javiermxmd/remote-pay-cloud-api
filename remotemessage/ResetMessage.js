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
var ResetMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = ResetMessage;
  this.setMethod(remotemessage_Method["RESET"]);
};

ResetMessage.prototype = Object.create(remotemessage_Message.prototype);
ResetMessage.prototype.constructor = ResetMessage;

ResetMessage._meta_ =  {fields:  {}};
ResetMessage._meta_._class_ =  ResetMessage;
ResetMessage._meta_._superMeta_ = remotemessage_Message._meta_;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = ResetMessage;
}

