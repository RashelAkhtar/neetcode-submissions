class Solution {
    majorityElement(nums) {
        let hash = {};
        for (let i=0; i<nums.length; i++) {
            if (hash[nums[i]]) {
                hash[nums[i]] += 1;
            } else {
                hash[nums[i]] = 1;
            }

            if (hash[nums[i]] > nums.length/2) {
                return nums[i];
            }
        }
    }
}
