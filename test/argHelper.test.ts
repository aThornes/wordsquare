import { getCommandLineInput } from './../src/lib/argHelper';
describe('Argument helper returns expected results', () => {
  it('Valid count & character set are returned', () => {
    const commandArgs = ['-n', '4', '-c', 'eeeeddoonnnsssrv'];

    process.argv = [...process.argv, ...commandArgs];

    const { count, characters } = getCommandLineInput();

    expect(count).toBe(Number(commandArgs[1]));
    expect(characters).toBe(commandArgs[3]);
  });

  it('Invalid count returns -1 for count', () => {
    //Count is not in valid range
    const commandArgs = ['-n', '24', '-c', 'eeeeddoonnnsssrv'];

    process.argv = [...process.argv, ...commandArgs];

    const { count } = getCommandLineInput();

    expect(count).toBe(-1);
  });

  it('Invalid character amount returns -1 for count', () => {
    //Character set length is not n^2
    const commandArgs = ['-n', '4', '-c', 'eeeeddoo'];

    process.argv = [...process.argv, ...commandArgs];

    const { count } = getCommandLineInput();

    expect(count).toBe(-1);
  });

  it("Invalid character returns valid response for 'all' variant", () => {
    //Character set length is not n^2
    const commandArgs = ['-n', '4', '-c', 'eeeeddoo', '-a'];

    process.argv = [...process.argv, ...commandArgs];

    const { count } = getCommandLineInput();

    expect(count).toBe(Number(commandArgs[1]));
  });
});
