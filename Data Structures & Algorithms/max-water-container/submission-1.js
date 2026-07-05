class Solution {
    maxArea(heights) {
        let start = 0, end = heights.length - 1;
        let maxArea = 0;

        while (start < end) {
            let area = (end - start) * (Math.min(heights[end], heights[start]));

            if (maxArea < area) {
                maxArea = area;
            }

            if (heights[end] > heights[start]) {
                start++;
            } else {
                end--;
            }

        }

        return maxArea;
    }
}
