import fs from 'fs';
import path from 'path';

// read file from input
// parse each line into array by newline

export const getInput = pathname =>
  fs
    .readFileSync(path.join(__dirname, pathname))
    .toString()
    .trim()
    .replace(/\r/g, '')
    .split('\n');
