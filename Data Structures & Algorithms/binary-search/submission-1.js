class Solution {
    search(nums, target) {
        let start = 0, end = nums.length-1;

        while (start <= end) {
            let mid = start + Math.floor((end - start)/2);

            if (target === nums[mid]) {
                return mid;
            } else if (target > nums[mid]) {
                start = mid+1;
            } else {
                end = mid-1;
            }
        }

        return -1;
    }
}
