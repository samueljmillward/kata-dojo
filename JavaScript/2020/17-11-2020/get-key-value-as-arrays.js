// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

function keysAndValues(data) {
  const keys = [];
  const values = [];

  for (const key in data) {
    keys.push(key);
    values.push(data[key]);
  }

  return [keys, values];
}
