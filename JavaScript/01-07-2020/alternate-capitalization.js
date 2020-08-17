// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
// The input will be a lowercase string with no spaces.

function capitalize(s) {

    let charsEven = s.toLowerCase().split("");
    let charsOdd = s.toLowerCase().split("");

    for (let i = 0; i < charsEven.length; i += 2) {
        charsEven[i] = charsEven[i].toUpperCase();
    }

    for (let i = 1; i < charsOdd.length; i += 2) {
        charsOdd[i] = charsOdd[i].toUpperCase();
    }

    return [chars.join(""), charsOdd.join("")];
};