// Write a regex to validate a 24 hours time string.

function validateTime(time) {
  let arr = time.split(':');

  if (arr[0] * 1 > 23 || arr[1] * 1 > 59 || time.length > 5) return false;

  return /\d{1,2}:\d{2}/.test(time);
}
