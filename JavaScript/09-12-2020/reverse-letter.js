// Given a string str, reverse it omitting all non-alphabetic characters.

function reverseLetter(str) {
  return str
    .split('')
    .reverse()
    .join('')
    .replace(/[^A-Za-z]/gi, '');
}
