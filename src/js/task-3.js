const findLongestWord = function (string) {
  const wordsStr = string.split(" ");
  let longestWord = "";
  for (let word of wordsStr) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
