/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
* @constructor
* @memberof custom
*/
var CustomActivity = function() {
  this._class_ = CustomActivity;
  this.action = undefined;
  this.categories = undefined;
};


/**
* Set the field value
* Action for the custom activity
*
* @memberof custom.CustomActivity
* @param {String} action 
*/
CustomActivity.prototype.setAction = function(action) {
  this.action = action;
};

/**
* Get the field value
* Action for the custom activity
* @memberof custom.CustomActivity
* @return {String} 
*/
CustomActivity.prototype.getAction = function() {
  return this.action;
};

/**
* Set the field value
* List of categories for the specified action.
*
* @memberof custom.CustomActivity
* @param {Array.<String>} categories An array of 
*/
CustomActivity.prototype.setCategories = function(categories) {
  this.categories = categories;
};

/**
* Get the field value
* List of categories for the specified action.
* @memberof custom.CustomActivity
* @return {Array.<String>} An array of 
*/
CustomActivity.prototype.getCategories = function() {
  return this.categories;
};

/**
* @memberof custom.CustomActivity
* @private
*/
CustomActivity.prototype.getMetaInfo = function(fieldName) {
  var curclass = this._class_;
  do {
    var fieldMetaInfo = curclass._meta_.fields[fieldName];
    if(fieldMetaInfo) {
      return fieldMetaInfo;
    }
    if(curclass._meta_._superMeta_) {
      curclass = curclass._meta_._superMeta_._class_;
    } else {
      curclass = null;
    }
  } while(curclass);
  return null;
};

CustomActivity.prototype.toString = function() {
  return JSON.stringify(this);
};

CustomActivity._meta_ =  {fields:  {}};
CustomActivity._meta_._class_ =  CustomActivity;
CustomActivity._meta_.fields["action"] = {};
CustomActivity._meta_.fields["action"].type = String;
CustomActivity._meta_.fields["categories"] = {};
CustomActivity._meta_.fields["categories"].type = Array;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = CustomActivity;
}
