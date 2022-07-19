// Write function toInitials returs initials for a given person name. E.g: "Bill Gates" -> "B. G."

// Note: initials should be separated with a space.

const toInitials = (name) => {
    return name
        .split(' ')
        .map((i) => i[0] + '.')
        .join(' ');
};
