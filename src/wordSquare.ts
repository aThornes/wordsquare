import { getWordFile } from './lib/fileHelper';
import {
  recursiveWordSelectAny,
  recursiveWordSelectSingle,
} from './lib/squareHelper';
import { isValidCharCount } from './lib/wordHelper';

const retrieveWordList = (req: GenerateSquareReq) => {
  const { count, characters } = req;

  /* Retrieve an array of words for the required word length */
  const wordList = getWordFile(count);

  if (!wordList.contents) {
    console.error(wordList.errorText);
    return;
  }

  /* Create a regular expression from the characters provided in order 
      to filter the word list 
  */
  const uniqueCharacters = [...new Set(characters.split(''))].join('');
  const re = RegExp(`^[${uniqueCharacters}]*$`);

  return wordList.contents.filter((x) => x.toLowerCase().match(re));
};

export const getWordSquare = (req: GenerateSquareReq) => {
  const variant = req.variant && req.variant === 'any' ? 'any' : 'single';

  const wordList = retrieveWordList(req);

  if (
    !wordList ||
    (variant === 'single' && !isValidCharCount(req.count, req.characters))
  ) {
    console.log('Invalid count', req.count, req.characters.length);
    return { solution: null, wordCount: 0 };
  }

  if (variant === 'single') {
    /* All characters are used exactly one time */
    const wordSquare = recursiveWordSelectSingle({
      availableList: wordList,
      wordIndex: 0,
      availableCharacters: req.characters,
    });

    return { solution: wordSquare, wordCount: wordList.length };
  }

  /* Can only use given characters but not restricted on use */
  const solution = recursiveWordSelectAny({
    availableList: wordList,
    wordIndex: 0,
  });

  return { solution, wordCount: wordList.length };
};
