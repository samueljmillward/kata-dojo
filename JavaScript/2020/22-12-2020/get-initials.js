// Write function toInitials returs initials for a given person name. E.g: "Bill Gates" -> "B. G."

function toInitials(name) {
  return name
    .split(' ')
    .map((i) => i[0] + '.')
    .join(' ');
}

// RegEx
function toInitials(s) {
  return s.replace(/[a-z]+/g, '.');
}
