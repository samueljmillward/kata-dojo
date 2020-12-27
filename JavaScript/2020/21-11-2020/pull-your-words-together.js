// Your function should:

// Capitalise the first letter of the first word.
// Add a period (.) to the end of the sentence.
// Join the words into a complete string, with spaces.
// Do no other manipulation on the words.

function sentencify(words) {
  return words.join(' ')[0].toUpperCase() + words.join(' ').slice(1) + '.';
}
