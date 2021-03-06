/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var employees_AccountRole = require("../employees/AccountRole");
var base_Reference = require("../base/Reference");

/**
* @constructor
* @memberof employees
*/
var Role = function() {
  this._class_ = Role;
  this.id = undefined;
  this.name = undefined;
  this.systemRole = undefined;
  this.employeesRef = undefined;
};


/**
* Set the field value
* Unique identifier
*
* @memberof employees.Role
* @param {String} id 
*/
Role.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* Unique identifier
* @memberof employees.Role
* @return {String} 
*/
Role.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* Full name of the role
*
* @memberof employees.Role
* @param {String} name 
*/
Role.prototype.setName = function(name) {
  this.name = name;
};

/**
* Get the field value
* Full name of the role
* @memberof employees.Role
* @return {String} 
*/
Role.prototype.getName = function() {
  return this.name;
};

/**
* Set the field value
* Base System Role
*
* @memberof employees.Role
* @param {employees.AccountRole} systemRole 
*/
Role.prototype.setSystemRole = function(systemRole) {
  this.systemRole = systemRole;
};

/**
* Get the field value
* Base System Role
* @memberof employees.Role
* @return {employees.AccountRole} 
*/
Role.prototype.getSystemRole = function() {
  return this.systemRole;
};

/**
* Set the field value
* employees with this role
*
* @memberof employees.Role
* @param {Array.<base.Reference>} employeesRef An array of 
*/
Role.prototype.setEmployeesRef = function(employeesRef) {
  this.employeesRef = employeesRef;
};

/**
* Get the field value
* employees with this role
* @memberof employees.Role
* @return {Array.<base.Reference>} An array of 
*/
Role.prototype.getEmployeesRef = function() {
  return this.employeesRef;
};

/**
* @memberof employees.Role
* @private
*/
Role.prototype.getMetaInfo = function(fieldName) {
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

Role.prototype.toString = function() {
  return JSON.stringify(this);
};

Role._meta_ =  {fields:  {}};
Role._meta_._class_ =  Role;
Role._meta_.fields["id"] = {};
Role._meta_.fields["id"].type = String;
Role._meta_.fields["name"] = {};
Role._meta_.fields["name"].type = String;
Role._meta_.fields["systemRole"] = {};
Role._meta_.fields["systemRole"].type = employees_AccountRole;
Role._meta_.fields["employeesRef"] = {};
Role._meta_.fields["employeesRef"].type = Array;
Role._meta_.fields["employeesRef"].elementType = base_Reference;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = Role;
}

