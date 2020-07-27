// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!


// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag(str) {
    hashtag = '#';

    let trimmed = str.replace(/\s/g, '');

    if (trimmed === '') {
        return false;
    } else {
        return trimmed.length >= 140 || str === '' ? false :
            hashtag + str.split(' ').map(capitalise).join('');
    }
}
function capitalise(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}