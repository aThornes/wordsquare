import {
  containsValidCharacters,
  isValidWord,
  spliceCharacters,
} from './wordHelper';

/**
 * Recursively create a valid word square using any of the characters provided
 * @param availableList Array of all words available
 * @param wordIndex Index (incremented each time the function calls itself)
 * @param activeWords Array of words above the parsing value
 *
 * @returns Array of words satisifying the word square criteria
 */
export const recursiveWordSelectAny = (
  req: WordSquareAnyReq,
): string[] | null => {
  return recursiveWordSelectSingle({ ...req, availableCharacters: null });
};

export const recursiveWordSelectSingle = (
  req: WordSquareSingleReq,
): string[] | null => {
  const { availableList, wordIndex, availableCharacters, activeWords } = req;

  /**
   * Only include words that are valid for the wordsquare position
   * & contain valid characters
   */
  const wordFilter = (word: string) =>
    activeWords &&
    containsValidCharacters(word, availableCharacters) &&
    isValidWord(word, activeWords);

  const wordList = activeWords
    ? availableList.filter((x) => wordFilter(x))
    : availableList;

  /**
   * This is the 'bottom' level of the recursion (i.e. the last word in the square)
   * Return any valid word or null if no word exists
   */
  if (activeWords && activeWords[0].length === wordIndex + 1)
    return wordList.length > 0 ? [wordList[0]] : null;

  let validWordArr: string[] | null = null;
  for (let word of wordList) {
    const activeList = availableList.filter((x) => x !== word);

    /* Remove the current word's characters from characters available */
    const updatedCharSet = spliceCharacters(word, availableCharacters);

    /* Dive deeper, find the next word */
    const foundWord = recursiveWordSelectSingle({
      availableList: activeList,
      wordIndex: wordIndex + 1,
      availableCharacters: updatedCharSet,
      activeWords: [...(activeWords || ''), word],
    });

    if (foundWord) {
      const curArr: string[] = validWordArr || [word];
      validWordArr = curArr.concat(foundWord);

      break;
    }
  }
  return validWordArr;
};
