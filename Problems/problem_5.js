// Find a Character Occurrence

let str = "Dhaka";
let find = "a";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === find) {
    count++;
  }
}
console.log(find + " appears " + count + " times");

// Sample Input:
// String: "banana"
// Character: "a"
// Sample Output: "a appears 3 times"
