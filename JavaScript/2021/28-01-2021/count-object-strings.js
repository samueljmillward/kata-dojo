// Create a function strCount (takes an object as argument) that will count all string values inside an object.

function strCount(obj) {
  let count = 0;
  for (key in obj) {
    if (typeof obj[key] == 'string') count++;
    if (typeof obj[key] == 'object') count += strCount(obj[key]);
  }

  return count;
}
