// Write a function to shuffle an array.

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
