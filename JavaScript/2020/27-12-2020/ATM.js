// There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.
// Try to find minimal number of notes that must be used to repay in dollars, or output -1 if it is impossible.

function solve(n) {
  let counter = 0;

  [500, 200, 100, 50, 20, 10].forEach((item) => {
    counter += Math.floor(n / item);
    n = n % item;
  });

  return n ? -1 : counter;
}
