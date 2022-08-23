// Given a string str, reverse it and omit all non-alphabetic characters.

// For str = "krishan", the output should be "nahsirk".
// For str = "ultr53o?n", the output should be "nortlu".

// A string consists of lowercase latin letters, digits and symbols.

const reverseLetter = (str) => {
    return str
        .split('')
        .reverse()
        .join('')
        .replace(/[^A-Z]/gi, '');
};
