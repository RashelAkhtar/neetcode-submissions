class Solution {
  isAllowed(ch) {
    if (
      (ch >= "a" && ch <= "z") ||
      (ch >= "A" && ch <= "Z") ||
      (ch >= "0" && ch <= "9")
    ) {
      return true;
    }
  }

  isAnagram(s, start, end) {
    while (start < end) {
      if (s[start] !== s[end]) return false;
      start++;
      end--;
    }
    return true;
  }

  validPalindrome(s) {
    let arr = s.toLowerCase().split('').filter((ch) => this.isAllowed(ch));
    let left = 0, right = arr.length-1;

    while (left < right) {
      if (arr[left] !== arr[right]) {
        return (
          this.isAnagram(s, left+1, right) || this.isAnagram(s, left, right-1)
        )
        
      }
      left++;
      right--;
    }

    return true;
  }
}
