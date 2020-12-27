// Create a method to serialize an object to JSON

Object.prototype.toJson = function (object) {
  return JSON.stringify(this);
};
