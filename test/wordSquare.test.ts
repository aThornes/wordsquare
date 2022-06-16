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

describe('Given valid values, word solutions can be generated (characters can be used multiple times)', () => {
  it('Passes the 4 character words test - eeeeddoonnnsssrv', () => {
    const count = 4;
    const characters = 'eeeeddoonnnsssrv';

    const { solution } = getWordSquare({ count, characters });

    expect(solution).not.toBeNull();
    if (!solution) return; // Early return to appease typescript

    expect(isValidSquare(solution));
  });

  it('Passes the 4 character words test - aaccdeeeemmnnnoo', () => {
    const count = 4;
    const characters = 'aaccdeeeemmnnnoo';

    const { solution } = getWordSquare({ count, characters });

    expect(solution).not.toBeNull();
    if (!solution) return; // Early return to appease typescript

    expect(isValidSquare(solution));
  });

  it('Passes the 5 character words test - aaaeeeefhhmoonssrrrrttttw', () => {
    const count = 5;
    const characters = 'aaaeeeefhhmoonssrrrrttttw';

    const { solution } = getWordSquare({ count, characters });

    expect(solution).not.toBeNull();
    if (!solution) return; // Early return to appease typescript

    expect(isValidSquare(solution));
  });

  it('Passes the 5 character words test - aabbeeeeeeeehmosrrrruttvv', () => {
    const count = 5;
    const characters = 'aabbeeeeeeeehmosrrrruttvv';

    const { solution } = getWordSquare({ count, characters });

    expect(solution).not.toBeNull();
    if (!solution) return; // Early return to appease typescript

    expect(isValidSquare(solution));
  });

  it('Passes the 7 character words test - aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy', () => {
    const count = 7;
    const characters = 'aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy';

    const { solution } = getWordSquare({ count, characters });

    expect(solution).not.toBeNull();
    if (!solution) return; // Early return to appease typescript

    expect(isValidSquare(solution));
  });
});

describe('Given valid values, word solutions can be generated (characters are one use each)', () => {
  it('Passes the 4 character words test - eeeeddoonnnsssrv', () => {
    const count = 4;
    const characters = 'eeeeddoonnnsssrv';

    const expectedSolution = ['rose', 'oven', 'send', 'ends'];

    const { solution } = getWordSquare({
      count,
      characters,
      variant: 'single',
    });

    expect(solution).not.toBeNull();
    if (!solution) return; // Early return to appease typescript

    expect(doArraysMatch(solution, expectedSolution)).toBe(true);
  });

  it('Passes the 4 character words test - aaccdeeeemmnnnoo', () => {
    const count = 4;
    const characters = 'aaccdeeeemmnnnoo';

    const expectedSolution = ['moan', 'once', 'acme', 'need'];

    const { solution } = getWordSquare({ count, characters });

    expect(solution).not.toBeNull();
    if (!solution) return; // Early return to appease typescript

    expect(doArraysMatch(solution, expectedSolution)).toBe(true);
  });

  it('Passes the 4 character words test - aaaadddeeiimnntt', () => {
    const count = 4;
    const characters = 'aaaadddeeiimnntt';

    const expectedSolution = ['mind', 'idea', 'neat', 'data'];

    const { solution } = getWordSquare({ count, characters });

    expect(solution).not.toBeNull();
    if (!solution) return; // Early return to appease typescript

    expect(doArraysMatch(solution, expectedSolution)).toBe(true);
  });

  it('Passes the 5 character words test - aaaeeeefhhmoonssrrrrttttw', () => {
    const count = 5;
    const characters = 'aaaeeeefhhmoonssrrrrttttw';

    const expectedSolution = ['feast', 'earth', 'armor', 'stone', 'threw'];

    const { solution } = getWordSquare({ count, characters });

    expect(solution).not.toBeNull();
    if (!solution) return; // Early return to appease typescript

    expect(doArraysMatch(solution, expectedSolution)).toBe(true);
  });

  it('Passes the 5 character words test - aabbeeeeeeeehmosrrrruttvv', () => {
    const count = 5;
    const characters = 'aabbeeeeeeeehmosrrrruttvv';

    const expectedSolution = ['heart', 'ember', 'above', 'revue', 'trees'];

    const { solution } = getWordSquare({ count, characters });

    expect(solution).not.toBeNull();
    if (!solution) return; // Early return to appease typescript

    expect(doArraysMatch(solution, expectedSolution)).toBe(true);
  });

  it('Passes the 5 character words test - eeeeeggiinnnnoorrssttttuu', () => {
    const count = 5;
    const characters = 'eeeeeggiinnnnoorrssttttuu';

    const expectedSolution = ['stung', 'tenor', 'untie', 'noise', 'greet'];

    const { solution } = getWordSquare({ count, characters });

    expect(solution).not.toBeNull();
    if (!solution) return; // Early return to appease typescript

    expect(doArraysMatch(solution, expectedSolution)).toBe(true);
  });

  it('Passes the 6 character words test - aaaaaaaaabcccdeegghhiiiiklnnoorrtttt', () => {
    const count = 6;
    const characters = 'aaaaaaaaabcccdeegghhiiiiklnnoorrtttt';

    const expectedSolution = [
      'aahing',
      'abator',
      'hakata',
      'italic',
      'notice',
      'graced',
    ];

    const { solution } = getWordSquare({ count, characters });

    expect(solution).not.toBeNull();
    if (!solution) return; // Early return to appease typescript

    expect(doArraysMatch(solution, expectedSolution)).toBe(true);
  });

  it('Passes the 6 character words test - aaacccceeeeeeeeiillmrrrrrrssssttttuuu', () => {
    const count = 6;
    const characters = 'aaacccceeeeeeeeiillmrrrrrrssssttttuuu';

    const expectedSolution = [
      'circle',
      'icaurus',
      'rarest',
      'create',
      'lustre',
      'esteem',
    ];

    const { solution } = getWordSquare({ count, characters });

    expect(solution).not.toBeNull();
    if (!solution) return; // Early return to appease typescript

    expect(doArraysMatch(solution, expectedSolution)).toBe(true);
  });

  it('Passes the 7 character words test - aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy', () => {
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

    const { solution } = getWordSquare({ count, characters });

    expect(solution).not.toBeNull();
    if (!solution) return; // Early return to appease typescript

    expect(doArraysMatch(solution, expectedSolution)).toBe(true);
  });
});
