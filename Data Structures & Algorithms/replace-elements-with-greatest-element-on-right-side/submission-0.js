class Solution {
    replaceElements(arr) {
        let n = arr.length;
        let max = -1;
        for (let i = n - 1; i >= 0; i--) {
            let temp = arr[i];
            arr[i] = max;
            if (temp > max) {
                max = temp;
            }
        }
        return arr;
    }
}