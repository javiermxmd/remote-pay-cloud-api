/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/** The base for requests */
/**
* @constructor
* @memberof remotepay
*/
var BaseRequest = function() {
  this._class_ = BaseRequest;
  this.requestId = undefined;
};


/**
* Set the field value
* Identifier for the request
*
* @memberof remotepay.BaseRequest
* @param {String|Null} requestId 
*/
BaseRequest.prototype.setRequestId = function(requestId) {
  this.requestId = requestId;
};

/**
* Get the field value
* Identifier for the request
* @memberof remotepay.BaseRequest
* @return {String|Null} 
*/
BaseRequest.prototype.getRequestId = function() {
  return this.requestId;
};

/**
* @memberof remotepay.BaseRequest
* @private
*/
BaseRequest.prototype.getMetaInfo = function(fieldName) {
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

BaseRequest.prototype.toString = function() {
  return JSON.stringify(this);
};

BaseRequest._meta_ =  {fields:  {}};
BaseRequest._meta_.fields["requestId"] = {};
BaseRequest._meta_.fields["requestId"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = BaseRequest;
}

