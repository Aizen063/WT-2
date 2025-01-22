const fs = require('fs');
const wordCount = require('word-count');

const words = fs.writeFileSync("word.txt", "ABCDE FGHIJKLMNOPQR STUVWXYZabc","utf-8");
console.log(words);

const data =fs.readFileSync("word.txt", "utf-8")
const word = data.split;
console.log(word,data.length);

