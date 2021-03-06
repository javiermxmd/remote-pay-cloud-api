/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var custom_CustomActivity = require("../custom/CustomActivity");
var remotemessage_Message = require("../remotemessage/Message");

/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var RetrieveCustomActivitiesResponseMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = RetrieveCustomActivitiesResponseMessage;
  this.setMethod(remotemessage_Method["RETRIEVE_CUSTOM_ACTIVITIES_RESPONSE"]);
  this.activities = undefined;
};

RetrieveCustomActivitiesResponseMessage.prototype = Object.create(remotemessage_Message.prototype);
RetrieveCustomActivitiesResponseMessage.prototype.constructor = RetrieveCustomActivitiesResponseMessage;

/**
* Set the field value
* Custom activities that met the request filtering requirements.
*
* @memberof remotemessage.RetrieveCustomActivitiesResponseMessage
* @param {Array.<custom.CustomActivity>} activities An array of 
*/
RetrieveCustomActivitiesResponseMessage.prototype.setActivities = function(activities) {
  this.activities = activities;
};

/**
* Get the field value
* Custom activities that met the request filtering requirements.
* @memberof remotemessage.RetrieveCustomActivitiesResponseMessage
* @return {Array.<custom.CustomActivity>} An array of 
*/
RetrieveCustomActivitiesResponseMessage.prototype.getActivities = function() {
  return this.activities;
};

RetrieveCustomActivitiesResponseMessage._meta_ =  {fields:  {}};
RetrieveCustomActivitiesResponseMessage._meta_._class_ =  RetrieveCustomActivitiesResponseMessage;
RetrieveCustomActivitiesResponseMessage._meta_._superMeta_ = remotemessage_Message._meta_;
RetrieveCustomActivitiesResponseMessage._meta_.fields["activities"] = {};
RetrieveCustomActivitiesResponseMessage._meta_.fields["activities"].type = Array;
RetrieveCustomActivitiesResponseMessage._meta_.fields["activities"].elementType = custom_CustomActivity;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = RetrieveCustomActivitiesResponseMessage;
}

