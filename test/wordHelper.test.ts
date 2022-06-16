import {
  containsValidCharacters,
  spliceCharacters,
} from '../src/lib/wordHelper';

describe('Word Helper functionality tests', () => {
  it('Valid words return true', () => {
    let letterSet = 'adeoqrrsuw';

    const validWords = ['wordsquare', 'square', 'word', 'sure', 'dare', 'wade'];

    validWords.forEach((word) => {
      expect(containsValidCharacters(word, letterSet)).toBe(true);
    });
  });

  it('Invalid words return false', () => {
    let letterSet = 'adeoqrrsuw';

    const validWords = [
      'Counter',
      'Wobble',
      'Squaree',
      'Adieu',
      'written',
      'sublet',
    ];

    validWords.forEach((word) => {
      expect(containsValidCharacters(word, letterSet)).toBe(false);
    });
  });

  it('Removes characters as appropriate', () => {
    const characters = 'sdfjhamshdflkj';
    const toRemove = 'hafjk';

    const expected = 'sdmshdflj';

    expect(spliceCharacters(toRemove, characters)).toBe(expected);
  });
});
