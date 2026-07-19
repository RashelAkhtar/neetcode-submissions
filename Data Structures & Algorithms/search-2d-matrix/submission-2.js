class Solution {
    searchMatrix(matrix, target) {
        for (let i = 0; i < matrix.length; i++) {
            let start = 0, end = matrix[i].length - 1;

            while (start <= end) {
                let mid = start + Math.floor((end - start) / 2);

                if (target === matrix[i][mid]) {
                    return true;
                    return;
                } else if (target > matrix[i][mid]) {
                    start = mid + 1;
                } else {
                    end = mid - 1;
                }
            }
        }

        return false;
    }
}
