// program to find frequency of a charactor

let city = "bangalore";

let freq = {};

for (let char of city) {
  freq[char] = (freq[char] || 0) + 1;
}

console.log(freq);
