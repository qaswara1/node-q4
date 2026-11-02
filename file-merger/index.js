const fs = require('fs');
const path = require('path');

// Array of 10 input file names
const inputFiles = [
  'file1.txt',
  'file2.txt',
  'file3.txt',
  'file4.txt',
  'file5.txt',
  'file6.txt',
  'file7.txt',
  'file8.txt',
  'file9.txt',
  'file10.txt',
].map((name) => path.join(__dirname, 'input', name));

const outputFile = path.join(__dirname, 'output.txt');

const result = [];

inputFiles.forEach((file, index) => {
  const linesToCopy = index + 1; // file 1 -> 1 line, file 2 -> 2 lines, ... file n -> n lines

  const content = fs.readFileSync(file, 'utf8');
  // remove a single trailing newline so it isn't counted as an extra empty line
  const lines = content.replace(/\r?\n$/, '').split(/\r?\n/);

  // slice() stops at the end of the file, so missing lines are simply not copied
  result.push(...lines.slice(0, linesToCopy));
});

fs.writeFileSync(outputFile, result.join('\n') + '\n', 'utf8');
console.log(`Done! Wrote ${result.length} lines to ${outputFile}`);
