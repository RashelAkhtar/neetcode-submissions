class Solution {
    minimumDifference(nums, k) {
        nums.sort((a,b) => a-b);

        let l=0, r=k-1, minCount = Infinity;
        while (r < nums.length) {
            minCount = Math.min(minCount, nums[r]-nums[l]);

            l++;
            r++;
        }

        return minCount;
    }
}
