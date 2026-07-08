
// vowelSum calculatas the sum
// position ++ increments until position = str.length - 1, so the last letter.

function countVowels(str) {
  let vowelSum = 0;
  let position = 0;
  while (position < str.length) {
    if (
      str[position] === "a" ||
      str[position] === "e" ||
      str[position] === "i" ||
      str[position] === "o" ||
      str[position] === "u"
    ) {
      vowelSum += 1;
    }
    position++;
  }
  return vowelSum;
}

console.log(
  countVowels(
    "the quick brown fox jumps over the lazy dog while eating a juicy orange",
  ),
);
