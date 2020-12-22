function toInitials(name) {
  return name
    .split(' ')
    .map((i) => i[0] + '.')
    .join(' ');
}
