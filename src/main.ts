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
  const { count, characters, all, help } = getCommandLineInput();

  if (count < 0 || help) {
    console.log(`Command usage:
    yarn start -n <number> -c <characters> {-a}
    Arguments:
    --number|-n : Provide length of each word in the word square (between 2 & 9 inclusive)
    --characters|-c : Provide characters available to generate the word square
    --all : Use the 'all' variant. Characters can be used more than one time `);

    return;
  }

  console.log(welcomeText(count, characters));

  console.log('Calculating......');
  const wordSquare = getWordSquare({
    count,
    characters,
    variant: all ? 'any' : 'single',
  });

  if (wordSquare) {
    displayResult(wordSquare);
  } else {
    console.error(
      'Failed to generate a valid Word Square from the provided input',
    );
  }
};

main();
