// Given a string str, reverse it omitting all non-alphabetic characters.

function reverseLetter(str) {
    return str.split('').reverse().filter((char) => char.match(/[a-zA-Z]/)).join('')
}