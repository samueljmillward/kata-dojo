// Many people choose to obfuscate their email address when displaying it on the Web. One common way of doing this is by substituting the @ and . characters for their literal equivalents in brackets.

obfuscate = function (email) {
  return email.replace('@', ' [at] ').replace(/\./gi, ' [dot] ');
};
