// Count Vowels in a String

let str = "Rashedul"
let count = 0;

for (let i = 0; i < str.length; i++) {
  let cha = str[i].toLowerCase();
  if (cha === 'a' || cha === 'e' || cha === 'i' || cha === 'o' || cha === 'u') {
    count++;
  }
}

console.log("Vowels:", count); 

// Sample Input: "Programming"
// Sample Output: Vowels: 3