// input
// A string containing the citizen's Cyrillic name cyrillic. The name will always consist of exactly two parts: a first name and a surname. The first name and the surname always start with a capital letter.

// A string containing the name of the citizen in Latin. The first letter of the first name and the surname should be a capital letter. If a capital Cyrillic letter transliterates into more than one Latin letters, only capitalize the first Latin letter. E.g. capital Cyrillic Щ becomes Shch.
const romanize = (cyrillic) => {
    let dict = {
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
    let temp = cyrillic.toLowerCase().replace(/[абвгдеёжзийклмнопрстуфхцчшщъыьэюя]/g, (a) => dict[a]);
    return temp.replace(/(^|\s)[a-z]/g, (b) => b.toUpperCase());
};
