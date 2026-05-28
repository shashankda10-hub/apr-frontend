let arr = [1, 2, 3, 4];
for (let val of arr) {
  console.log(val);
}

let str = "banglore";

for (let char of str) {
  console.log(char);
}

// obj : for in

let obj = {
  name: "david",
  city: "banglore",
};
for (let key in obj) {
  console.log(key + "" + obj[key]);
}

// program to find frequency of a charactor

let city = "bangalore";

let freq = {};

for (let char of city) {
  freq[char] = (freq[char] || 0) + 1;
}

console.log(freq);
