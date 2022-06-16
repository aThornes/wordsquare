/**
 * This script generates all 2 & 3 character prefixes that cannot result in a real word
 */

const fs = require('fs');

const getWordFile = (wordLength) => {
  const fileName = `assets/words_${wordLength}.txt`;

  const wordFileContents = fs.readFileSync(fileName, 'utf-8');

  return wordFileContents.split(' ');
};

const getChar = (index) => String.fromCharCode(97 + index);

const getCharArr = (count) => {
  const arr = [];
  for (let n = 0; n < 26; n++) {
    const char = getChar(n);

    if (count === 1) {
      arr.push(char);
    } else {
      const subArr = getCharArr(count - 1);
      arr.push(...subArr.map((c) => `${char}${c}`));
    }
  }

  return arr;
};

const getInvalidChars = (charCount) => {
  /* Reduce words to first 2 characters 
      Note: Set is used to remove all duplicates
*/
  const charSet = new Set(wordList.map((x) => x.substring(0, charCount)));
  const charArr = [...charSet];

  const potentialCharSet = getCharArr(charCount);

  return potentialCharSet.filter((char) => !charArr.includes(char));
};

let wordList = [];

/* Combine all word files into one array */
for (let i = 3; i <= 9; i++) wordList = [...wordList, ...getWordFile(i)];

/* Retrieve invalid word prefixes */
const invalidTwoChar = getInvalidChars(2);
const invalidThreeChar = getInvalidChars(3);

/* Cleanup 3 char array by removing any prefixes covered by the 2 char array */
const reducedThreeChar = invalidThreeChar.filter(
  (x) => !invalidTwoChar.includes(x.substring(0, 2)),
);

fs.writeFileSync('assets/invalidTwoChar.json', JSON.stringify(invalidTwoChar));
fs.writeFileSync(
  'assets/invalidThreeChar.json',
  JSON.stringify(reducedThreeChar),
);
