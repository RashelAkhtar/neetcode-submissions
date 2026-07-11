class Solution {
    containsNearbyDuplicate(nums, k) {
        let map = new Map();

        for (let i in nums) {
            if (map.has(nums[i]) && (Math.abs(i-map.get(nums[i])) <= k)) {
                return true;
            }
            map.set(nums[i], i);
        }
        return false;
    }
}
