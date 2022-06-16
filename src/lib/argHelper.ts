export const getCommandLineInput = (): CommandLineArgsRes => {
  let count: number = 4;
  let characters: string = 'eeeeddoonnnsssrv';
  let all = false;

  /* Commandline input */
  process.argv.forEach((arg, i) => {
    switch (arg) {
      case '-h':
      case '--help':
        return { count: -1, characters: '', help: true };
      case '-n':
      case '--number':
        count = Number(process.argv[i + 1]) || 1;
        break;
      case '-c':
      case '--characters':
        characters = process.argv[i + 1];
        break;
      case '-a':
      case '--all':
        all = true;
        break;
    }
  });

  /* Ensure count is a valid number */
  if (!count || count < 2 || count > 9) {
    count &&
      console.error(
        'Invalid count provided. Must be a valid non-zero number between 2 & 9 inclusive',
      );
    return { count: -1, characters: '' };
  }

  /* Ensure characters are valid & if using the 'single' variant, 
      ensure there are n^2 characters to n count 
  */
  if (!characters || (!all && count * count !== characters.length)) {
    characters &&
      console.error(
        'Characters must be valid characters and number n^2 where n is the word count',
      );
    return { count: -1, characters: '' };
  }

  return { count, characters, all };
};
