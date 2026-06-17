class Solution {
    isAllowed(ch) {
        if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9'))
            return true;
    }
    isPalindrome(s) {
        let str = s.toLowerCase().split('').filter(ch => this.isAllowed(ch));
        let left = 0, right = str.length - 1;

        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }
}
