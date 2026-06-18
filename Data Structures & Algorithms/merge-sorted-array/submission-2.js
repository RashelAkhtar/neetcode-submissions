class Solution {
    merge(nums1, m, nums2, n) {
        let k = m+n-1;
        while ((m-1) >= 0 && (n-1) >= 0) {
            if (nums1[m-1] < nums2[n-1]) {
                nums1[k] = nums2[n-1];
                n--;
            } else {
                console.log("2")
                nums1[k] = nums1[m-1];
                m--;
            }
            k--;
        }

        while ((n-1) >= 0) {
            nums1[k] = nums2[n-1];
            n--;
            k--;
        }
        
        return nums1
    }
}
