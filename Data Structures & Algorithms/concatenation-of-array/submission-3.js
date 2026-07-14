class Solution {
    getConcatenation(nums) {
        let res = [];

        for (let i=0; i<nums.length; i++) {
            res.push(nums[i]);
        }

        for (let i=0; i<nums.length; i++) {
            res.push(nums[i]);
        }

        return res;
    }
}
