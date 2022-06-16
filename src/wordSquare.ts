import { getWordFile } from './lib/fileHelper';
import {
  recursiveWordSelectAny,
  recursiveWordSelectSingle,
} from './lib/squareHelper';

const retrieveWordList = (req: GenerateSquareReq) => {
  const { count, characters } = req;

  /* Retrieve an array of words for the required word length */
  const wordList = getWordFile(count);

  if (!wordList) return;

  const uniqueCharacters = [...new Set(characters.split(''))].join('');
  const re = RegExp(`^[${uniqueCharacters}]*$`);

  return wordList.filter((x) => x.toLowerCase().match(re));
};

export const getWordSquare = (req: GenerateSquareReq) => {
  const wordList = retrieveWordList(req);

  if (!wordList) {
    console.error('Failed to retrieve word list');
    return null;
  }

  if (req.variant && req.variant === 'single') {
    /* All characters are used exactly one time */
    return recursiveWordSelectSingle({
      availableList: wordList,
      wordIndex: 0,
      availableCharacters: req.characters,
    });
  }

  /* Can only use given characters but not restricted on use */
  return recursiveWordSelectAny({ availableList: wordList, wordIndex: 0 });
};
