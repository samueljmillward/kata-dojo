// Implement a function that receives a string, and lets you extend it with repeated calls. When no argument is passed you should return a string consisting of space-separated words you've received earlier.

const createMessage = (str) => {
    return (str1) => {
        if (str1 === undefined) return str;

        return createMessage(`${str} ${str1}`);
    };
};
