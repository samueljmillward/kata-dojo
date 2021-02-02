// Aliens have landed on earth. They speak an Alien version of English. So you can communicate with them, write a function which translates an English sentence to the language of the Aliens using these rules:

function translateToAlienLanguage(string) {
  return string
    .toLowerCase()
    .split(' ')
    .map((i) =>
      i
        .split('')
        .reverse()
        .join('')
        .replace(/([aeiou])/g, '$1$1')
    )
    .join(' ');
}
