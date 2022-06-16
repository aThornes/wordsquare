# Word Square Solver

Coding Challenge - Word Square Solver

Generates a valid word square for a give word length and character set

Supports two variants:
Single(Default) - n^2 characters must be given for n word length. Each character must be used and only used 1 time.
Any - Characters can be used any number of times and not all characters must be used.

## Dependencies

In order to run this application you will need:

- [yarn](https://yarnpkg.com/)
- [node](https://nodejs.org/en/) (Intended version: v16.13.2)

## Usage

This is a commandline application

1. Build the application (typescript to javascript)
   `yarn build`

2. Run the application
   `yarn start <commandline args>`

### Commandline arguments

`-n <number>` - specify word length

`-c <characters>` - specifify character set

`-a` - run the program in the 'any' variant

### Example Usage

Command:
`yarn start -n 4 -c eeeeddoonnnsssrv`

Expected output:

```
Welcome to the Word Square solver.

Using the following parameters:
 Count:    4
 Characters: 'eeeeddoonnnsssrv'

Calculating......
Word Square generated!

 ---------
| r o s e |
| o v e n |
| s e n d |
| e n d s |
 ---------
Done in 0.14s.
```

## Testing

Unit tests are executed via jest

To run, use

`yarn test`

Note: Tests involving longer words may take some time to calculate (typically around 1 minute to complete all tests)

## Optimisation

One of the tricky parts of solving word squares is making the process efficient enough to handle larger words.

This program takes the following steps to improve calculation time:

1. Filter dictionary to words made from letters from the initial character set
2. Check vertical axis, discount words that create 2 letter verticals that cannot spell a valid word

### Vertical axis check

Note: completion time is averages over 3 attempts (rounded to closest 10ms)

| Count | Letters                                           | No check completion time (ms) | With check completion time (ms) |
| ----- | ------------------------------------------------- | ----------------------------- | ------------------------------- |
| 4     | eeeeddoonnnsssrv                                  | 130                           | 130                             |
| 5     | aaaeeeefhhmoonssrrrrttttw                         | 570                           | 310                             |
| 5     | aabbeeeeeeeehmosrrrruttvv                         | 280                           | 440                             |
| 7     | aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy | 188500                        | 9230                            |
