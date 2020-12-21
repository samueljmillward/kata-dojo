// An abundant number or excessive number is a number for which the sum of its proper divisors is greater than the number itself.

// Derive function which returns true, if num is abundant, false, if not.

function abundantNumber(num) {
  let arr = [];

  for (let i = 1; i < num; i++) {
    if (num % i === 0) arr.push(i);
  }

  return arr.reduce((a, b) => a + b, 0) > num;
}
