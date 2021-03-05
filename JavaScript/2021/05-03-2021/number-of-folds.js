// Suppose I have a big paper and i want to draw n number of grids just by folding it (see example ). How many times do i have to fold it to get n number of grids.

function numberOfFolds(n) {
  return n.toString(2).length - 1;
}
