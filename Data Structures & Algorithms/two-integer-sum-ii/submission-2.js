class Solution {
    twoSum(numbers, target) {
        let start = 0, end = numbers.length-1;

        while (start < end) {
            let sum = numbers[start]+numbers[end]
            if (sum === target ) {
                return [start+1, end+1];
            }

            if (sum > target) {
                end--;
            }
            if (sum < target) {
                start++;
            }
        }
        return undefined;
    }
}

const sol = new Solution();
console.log(sol.twoSum([1,2,3,4], 3));