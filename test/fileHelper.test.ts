import { getWordFile } from './../src/lib/fileHelper';

describe('File helper returns file contents', () => {
  it('File contents are retrieved for numbers 2 to 9', () => {
    for (let i = 2; i < 10; i++) {
      const contents = getWordFile(i);

      expect(contents).not.toBeNull();
    }
  });

  it('File contents are not retrieved for count below minimum', () => {
    const contents = getWordFile(0);

    expect(contents).toBeNull();
  });

  it('File contents are not retrieved for count above maximum', () => {
    const contents = getWordFile(10);

    expect(contents).toBeNull();
  });
});
