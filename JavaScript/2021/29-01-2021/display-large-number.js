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
