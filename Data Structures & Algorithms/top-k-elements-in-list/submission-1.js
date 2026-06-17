class Solution {
    topKFrequent(nums, k) {
        let map = new Map();
        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }

        const mapArray = [...map].sort((a, b) => b[1] - a[1]).slice(0, k).map(([key, freq]) => key);

        return mapArray;
    }
}
