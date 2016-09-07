/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
* @constructor
* @memberof base
*/
var Point = function() {
  this._class_ = Point;
  this.x = undefined;
  this.y = undefined;
};


/**
* Set the field value
* @memberof base.Point
* @param {Number} x must be a long integer
*/
Point.prototype.setX = function(x) {
  this.x = x;
};

/**
* Get the field value
* @memberof base.Point
* @return {Number} must be a long integer
*/
Point.prototype.getX = function() {
  return this.x;
};

/**
* Set the field value
* @memberof base.Point
* @param {Number} y must be a long integer
*/
Point.prototype.setY = function(y) {
  this.y = y;
};

/**
* Get the field value
* @memberof base.Point
* @return {Number} must be a long integer
*/
Point.prototype.getY = function() {
  return this.y;
};

/**
* @memberof base.Point
* @private
*/
Point.prototype.getMetaInfo = function(fieldName) {
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

Point.prototype.toString = function() {
  return JSON.stringify(this);
};

Point._meta_ =  {fields:  {}};
Point._meta_.fields["x"] = {};
Point._meta_.fields["x"].type = Number;
Point._meta_.fields["y"] = {};
Point._meta_.fields["y"].type = Number;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = Point;
}

