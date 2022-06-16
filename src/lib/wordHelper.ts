import { readJSONFile } from './fileHelper';

/**
 * Check if a word contains only characters from a set
 *
 * Number of characters is restricted to the set
 *     (e.g. set: 'end', test: 'need', result: fail since set only contains 1 'e')
 */

const invalidTwoChar = readJSONFile('invalidTwoChar');
const invalidThreeChar = readJSONFile('invalidThreeChar');

export const containsValidCharacters = (
  word: string,
  characters: string | null,
) => {
  if (!characters) return true;

  const charArr = characters.toLowerCase().split('');
  for (let char of word.toLowerCase().split('')) {
    const charIndex = charArr.findIndex((x) => x === char);

    if (charIndex >= 0) {
      charArr.splice(charIndex, 1);
    } else return false;
  }
  return true;
};

/**
 * Remove a word's characters from a set of characters
 */
export const spliceCharacters = (word: string, charSet: string | null) => {
  if (!charSet) return null;

  let returnSet = charSet;
  word.split('').forEach((char) => {
    returnSet = returnSet.replace(char, '');
  });

  return returnSet;
};

/**
 * Check if word satisifies word square condition for current location
 * @param word Word to check
 * @param previousWords Array of words previous to this one
 * @returns true if word is valid
 */
export const isValidWord = (word: string, previousWords: string[]) => {
  if (!previousWords) return true;

  for (let n = 0; n < previousWords.length; n++) {
    if (word.charAt(n) !== previousWords[n].charAt(previousWords.length)) {
      return false;
    }
  }

  return true;
};

/* Check the start of each vertical word to see if combination is valid */
export const verticalCheck = (wordArr: string[]) => {
  const wordCount = wordArr.length;

  /* Can't check for first word */
  if (wordCount !== 2 && wordCount !== 3) return true;

  const wordStart: string[] = [];

  const invalidCombinations =
    wordCount === 2 ? invalidTwoChar : invalidThreeChar;

  for (let i = 0; i < wordArr[0].length; i++) {
    let str = '';
    for (let n = 0; n < wordCount; n++) {
      str += wordArr[n].charAt(i);
    }
    wordStart.push(str);
  }

  for (let charCombination of wordStart) {
    if (invalidCombinations.includes(charCombination)) return false;
  }

  return true;
};
