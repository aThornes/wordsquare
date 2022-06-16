import fs from 'fs';

/**
 * Retrieves dataset - list of words for the given number of characters
 * @param wordLength Number of characters in words
 * @returns Array of strings
 */
export const getWordFile = (wordLength: number) => {
  if (wordLength < 2 || wordLength > 9) {
    console.error('Invalid count, must be between 2 & 9 inclusive');
    return null;
  }

  const fileName = `assets/words_${wordLength}.txt`;

  const wordFileContents = fs.readFileSync(fileName, 'utf-8');

  if (!wordFileContents) {
    console.error(`Could not read asset '${fileName}'. Exiting....`);
    return null;
  }

  /* File words are separated by spaces, split into array */
  return wordFileContents.split(' ');
};
