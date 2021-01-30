// In some locales (like the US) large numbers are displayed with commas every 3 digits to help users understand the size of the number at a glance.

// You're going to write a function to format a number for display in that way.

function displayLargeNumber(n) {
  let arr = [];
  let str = n.toString().split('').reverse().join('');
  for (let i = 0; i < str.length; i += 3) {
    arr.push(str.slice(i, i + 3));
  }
  return arr
    .map((j) => j.split('').reverse().join(''))
    .reverse()
    .join(',');
}
