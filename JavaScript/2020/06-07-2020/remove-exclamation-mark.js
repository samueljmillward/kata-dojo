// Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

function remove(s) {
    if (s.endsWith('!')) {

    } else {
        return s;
    }
    return s.slice(0, -1)
}