class Solution {
    twoSum(nums, target) {
        let map = {};

        for (let i=0; i<nums.length; i++) {
            map[nums[i]] = i;
        }

        for (let i=nums.length; i>=0; i--) {
            let diff = target - nums[i];

            if (map[diff] !== undefined && map[diff] !== i) {
                return [map[diff], i];
            }
        }

        return [];
    }
}
