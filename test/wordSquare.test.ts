import { isValidWord } from '../src/lib/wordHelper';
import { getWordSquare } from './../src/wordSquare';

const isValidSquare = (wordSquare: string[]) => {
  for (let i = 1; i < wordSquare.length; i++) {
    const word = wordSquare[i];
    if (!isValidWord(word, wordSquare.slice(0, i))) return false;
  }
  return true;
};

const doArraysMatch = (strA: string[], strB: string[]) => {
  if (strA === strB) return true;
  if (strA.length !== strB.length) return false;

  strA.forEach((str, i) => {
    if (str !== strB[i]) return false;
  });
  return true;
};

describe('Given valid values, word squares can be generated (characters can be used multiple times)', () => {
  it('Passes the 4 word test - eeeeddoonnnsssrv', () => {
    const count = 4;
    const characters = 'eeeeddoonnnsssrv';

    const square = getWordSquare({ count, characters });

    expect(square).not.toBeNull();
    if (!square) return; // Early return to appease typescript

    expect(isValidSquare(square));
  });

  it('Passes the 4 word test - aaccdeeeemmnnnoo', () => {
    const count = 4;
    const characters = 'aaccdeeeemmnnnoo';

    const square = getWordSquare({ count, characters });

    expect(square).not.toBeNull();
    if (!square) return; // Early return to appease typescript

    expect(isValidSquare(square));
  });

  it('Passes the 5 word test - aaaeeeefhhmoonssrrrrttttw', () => {
    const count = 5;
    const characters = 'aaaeeeefhhmoonssrrrrttttw';

    const square = getWordSquare({ count, characters });

    expect(square).not.toBeNull();
    if (!square) return; // Early return to appease typescript

    expect(isValidSquare(square));
  });

  it('Passes the 5 word test - aabbeeeeeeeehmosrrrruttvv', () => {
    const count = 5;
    const characters = 'aabbeeeeeeeehmosrrrruttvv';

    const square = getWordSquare({ count, characters });

    expect(square).not.toBeNull();
    if (!square) return; // Early return to appease typescript

    expect(isValidSquare(square));
  });

  it('Passes the 7 word test - aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy', () => {
    const count = 7;
    const characters = 'aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy';

    const square = getWordSquare({ count, characters });

    expect(square).not.toBeNull();
    if (!square) return; // Early return to appease typescript

    expect(isValidSquare(square));
  });
});

describe('Given valid values, word squares can be generated (characters are one use each)', () => {
  it('Passes the 4 word test - eeeeddoonnnsssrv', () => {
    const count = 4;
    const characters = 'eeeeddoonnnsssrv';

    const expectedSolution = ['rose', 'oven', 'send', 'ends'];

    const square = getWordSquare({ count, characters, variant: 'single' });

    expect(square).not.toBeNull();
    if (!square) return; // Early return to appease typescript

    expect(doArraysMatch(square, expectedSolution)).toBe(true);
  });

  it('Passes the 4 word test - aaccdeeeemmnnnoo', () => {
    const count = 4;
    const characters = 'aaccdeeeemmnnnoo';

    const expectedSolution = ['moan', 'once', 'acme', 'need'];

    const square = getWordSquare({ count, characters });

    expect(square).not.toBeNull();
    if (!square) return; // Early return to appease typescript

    expect(doArraysMatch(square, expectedSolution)).toBe(true);
  });

  it('Passes the 5 word test - aaaeeeefhhmoonssrrrrttttw', () => {
    const count = 5;
    const characters = 'aaaeeeefhhmoonssrrrrttttw';

    const expectedSolution = ['feast', 'earth', 'armor', 'stone', 'threw'];

    const square = getWordSquare({ count, characters });

    expect(square).not.toBeNull();
    if (!square) return; // Early return to appease typescript

    expect(doArraysMatch(square, expectedSolution)).toBe(true);
  });

  it('Passes the 5 word test - aabbeeeeeeeehmosrrrruttvv', () => {
    const count = 5;
    const characters = 'aabbeeeeeeeehmosrrrruttvv';

    const expectedSolution = ['heart', 'ember', 'above', 'revue', 'trees'];

    const square = getWordSquare({ count, characters });

    expect(square).not.toBeNull();
    if (!square) return; // Early return to appease typescript

    expect(doArraysMatch(square, expectedSolution)).toBe(true);
  });

  it('Passes the 7 word test - aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy', () => {
    const count = 7;
    const characters = 'aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy';

    const expectedSolution = [
      'bravado',
      'renamed',
      'analogy',
      'valuers',
      'amoebas',
      'degrade',
      'odyssey',
    ];

    const square = getWordSquare({ count, characters });

    expect(square).not.toBeNull();
    if (!square) return; // Early return to appease typescript

    expect(doArraysMatch(square, expectedSolution)).toBe(true);
  });
});
