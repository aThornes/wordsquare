import fs from 'fs';

/**
 * Retrieves dataset - list of words for the given number of characters
 * @param wordLength Number of characters in words
 * @returns Array of strings
 */
export const getWordFile = (wordLength: number) => {
  if (wordLength < 3 || wordLength > 9) {
    return {
      contents: null,
      errorText: 'Invalid count, must be between 3 & 9 inclusive',
    };
  }

  const fileName = `assets/words_${wordLength}.txt`;

  const wordFileContents = fs.readFileSync(fileName, 'utf-8');

  if (!wordFileContents) {
    return {
      contents: null,
      errorText: `Could not read asset '${fileName}'. Exiting....`,
    };
  }

  /* File words are separated by spaces, split into array */
  return { contents: wordFileContents.split(' ') };
};

export const readJSONFile = (filename: string) => {
  const parseFile = `assets/${filename}.json`;
  const contents = fs.readFileSync(parseFile, 'utf-8');

  try {
    return JSON.parse(contents);
  } catch {
    console.error(`Failed to parse json file ${parseFile}`);
    return [];
  }
};
