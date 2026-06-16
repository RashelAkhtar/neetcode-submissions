class Solution {
    majorityElement(nums) {
        let n = nums.length;
        let hash = {};
        for (let i=0; i<n; i++) {
            if (hash[nums[i]]) {
                hash[nums[i]] += 1;
            } else {
                hash[nums[i]] = 1;
            }
        }

        for (let i=0; i<n; i++) {
            if (hash[nums[i]] >= (n/2)) {
                let key = Object.keys(hash).find(key => hash[key] === hash[nums[i]])
                return key;
            }
        }
    }
}
