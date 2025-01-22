const fs = require('fs');
const data = fs.readFileSync('word.txt', 'utf8');
const vowels = ['a', 'A', 'E', 'e', 'i', 'I', 'o','O','u', 'U'];
let vowelCount = 0;
for (let i = 0; i < data.length; i++) {
    const char = data[i];
    if (vowels.includes(char)) {
        vowelCount++;
    }
    else if (char === ' ') {
        vowelCount++;
    }
}
console.log(vowelCount);