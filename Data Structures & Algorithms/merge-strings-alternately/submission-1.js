class Solution {
  mergeAlternately(word1, word2) {
    let w3 = [];
    for (let i = 0; i < word1.length && i < word2.length; i++) {
      w3.push(word1[i]);
      w3.push(word2[i]);
    }

    if (word1.length > word2.length) {
      for (let i = word2.length; i < word1.length; i++) {
        w3.push(word1[i]);
      }
    } else {
      for (let i = word1.length; i < word2.length; i++) {
        w3.push(word2[i]);
      }
    }
    return w3.join("");
  }
}