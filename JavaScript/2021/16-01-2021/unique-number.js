// Write a function called findUnique which returns the only unique number from an array.
// All numbers in the unsorted array are present twice, except the one you have to find

function findUnique(numbers) {
  return numbers.reduce((a, b) => a ^ b);
}
