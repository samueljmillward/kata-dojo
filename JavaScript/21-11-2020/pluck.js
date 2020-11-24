// Implement a function which takes a sequence of objects and a property name, and returns a sequence containing the named property of each object.

function pluck(objs, name) {
  return objs.map((element) => element[name]);
}
