/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
* @memberof remotemessage
* @enum {string}
*/
RemoteMessageType = {
  COMMAND : "COMMAND",
  QUERY : "QUERY",
  EVENT : "EVENT",
  PING : "PING",
  PONG : "PONG"
};


//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = RemoteMessageType;
}

