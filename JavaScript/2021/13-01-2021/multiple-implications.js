// Given an array (return false if the array is empty), assume that from first to last item in the array, each implies the next (for example, in an array of three items, p, q, and r: (p->q)->r. Return the boolean answer.

function multImplication(arr) {
  return arr.length ? arr.reduce((a, b) => !a || b, true) : null;
}
