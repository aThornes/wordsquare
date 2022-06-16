import { getRecursionHits } from './lib/squareHelper';
import { getCommandLineInput } from './lib/argHelper';
import { getWordSquare } from './wordSquare';

const welcomeText = (
  count: number,
  characters: string,
) => `----------------------------------
Welcome to the Word Square solver.

Using the following parameters:
 Count:    ${count}
 Characters: '${characters}'\n`;

const displayResult = (wordSquare: string[]) => {
  const drawLine = ` --${[...Array(wordSquare.length)].join('--')}-`;

  console.log('Word Square generated!\n');
  console.log(drawLine);
  wordSquare.forEach((line) => {
    console.log(`| ${line.split('').join(' ')} |`);
  });
  console.log(drawLine);
};

const main = () => {
  const { count, characters, all, errorText, help } = getCommandLineInput();

  if (count < 0 || help) {
    if (errorText) console.error(errorText);
    console.log(`Command usage:
    yarn start -n <number> -c <characters> {-a}
    Arguments:
    --number|-n : Provide length of each word in the word square (between 3 & 9 inclusive)
    --characters|-c : Provide characters available to generate the word square
    --all : Use the 'all' variant. Characters can be used more than one time `);

    return;
  }

  console.log(welcomeText(count, characters));

  console.log('Calculating......');
  const { solution, wordCount } = getWordSquare({
    count,
    characters,
    variant: all ? 'any' : 'single',
  });

  console.log('Potential words in list:', wordCount);

  console.log('Recursive hits:', getRecursionHits());

  if (solution) {
    displayResult(solution);
  } else {
    console.error(
      'Failed to generate a valid Word Square from the provided input',
    );
  }
};

main();
