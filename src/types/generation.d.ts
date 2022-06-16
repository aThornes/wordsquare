interface GenerateSquareReq {
  count: number;
  characters: string;

  /*
    Variants:

    any: words must only use characters from the set but each letter is not limited to a single use
    single: characters must all be used and only used once

  */
  variant?: 'any' | 'single';
}

interface WordSquareAnyReq {
  availableList: string[];
  wordIndex: number;
  activeWords?: string[];
}

interface WordSquareSingleReq {
  availableList: string[];
  wordIndex: number;
  availableCharacters: string | null;
  activeWords?: string[];
}
