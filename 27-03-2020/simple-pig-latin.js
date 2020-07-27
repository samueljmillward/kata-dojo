// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
    return str.split(' ').map(function (pig) {
        return pig.slice(1) + pig.slice(0, 1) + "ay";
    }).join(' ');
}