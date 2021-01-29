// You are Ivan, and you just started working at the Russian government.
// Currently, when a citizen applies for a passport, a team of specialists transliterate the citizen's Cyrillic name into Latin by hand. Your assignment is to improve this, and make a program that transliterates names from Cyrillic to Latin automatically.

function romanize(cyrillic) {
  let dictionary = {
    а: 'a',
    б: 'b',
    в: 'v',
    г: 'g',
    д: 'd',
    е: 'e',
    ё: 'e',
    ж: 'zh',
    з: 'z',
    и: 'i',
    й: 'i',
    к: 'k',
    л: 'l',
    м: 'm',
    н: 'n',
    о: 'o',
    п: 'p',
    р: 'r',
    с: 's',
    т: 't',
    у: 'u',
    ф: 'f',
    х: 'kh',
    ц: 'ts',
    ч: 'ch',
    ш: 'sh',
    щ: 'shch',
    ъ: 'ie',
    ы: 'y',
    ь: '',
    э: 'e',
    ю: 'iu',
    я: 'ia',
  };
  let temp = cyrillic
    .toLowerCase()
    .replace(/[абвгдеёжзийклмнопрстуфхцчшщъыьэюя]/g, (a) => dictionary[a]);
  return temp.replace(/(^|\s)[a-z]/g, (b) => b.toUpperCase());
}
