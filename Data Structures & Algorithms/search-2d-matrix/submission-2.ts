class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let l = 0, r = matrix.length - 1

        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2)
            let row = matrix[mid]

            if (row[0] <= target && row[row.length - 1] >= target) 
                return this.search(row, target)

            if (row[0] > target) {
                r = mid - 1
            } else if (row[row.length - 1] < target) {
                l = mid + 1
            }
        }

        return false
    }

    search(nums: number [], target: number): boolean {
        let l = 0, r = nums.length - 1

        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2)

            if(nums[mid] === target) return true

            if (nums[mid] > target) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        return false
    }
}
