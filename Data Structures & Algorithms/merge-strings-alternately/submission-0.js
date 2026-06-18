class Solution {
  mergeAlternately(word1, word2) {
    let w1 = word1.split("");
    let w2 = word2.split("");
    let w3 = [];
    for (let i = 0; i < w1.length && i < w2.length; i++) {
      w3.push(w1[i]);
      w3.push(w2[i]);
    }

    if (w1.length > w2.length) {
      for (let i = w2.length; i < w1.length; i++) {
        w3.push(w1[i]);
      }
    } else {
      for (let i = w1.length; i < w2.length; i++) {
        w3.push(w2[i]);
      }
    }

    return w3.join("");
  }
}
