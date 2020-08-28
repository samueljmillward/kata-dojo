// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

function list(names) {
    return names.reduce(function (prev, cur, i, arr) {
        return prev + cur.name + (
            i < arr.length - 2 ? ', ' :
                i == arr.length - 2 ? ' & ' : '')
    }, '');
}