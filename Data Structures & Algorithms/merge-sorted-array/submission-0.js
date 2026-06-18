class Solution {
    merge(nums1, m, nums2, n) {
        nums1.splice(m, n);

        for (let i=0; i<nums2.length; i++) {
            nums1.push(nums2[i])
        }
        
        return nums1.sort((a, b) => a-b)
    }
}
