class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let l = 0, r = matrix.length - 1

        while (l <= r){
            const mid = l + Math.floor((r - l) / 2)
            const len = matrix[mid].length 

            if (matrix[mid][0] <= target && matrix[mid][len - 1] >= target)
                return this.bSearch(matrix[mid], target)
            
            if (matrix[mid][0] > target)
                r = mid - 1
            else if (matrix[mid][len - 1] < target)
                l = mid + 1
        }

        return false
    }

    bSearch (row: number[], target: number): boolean {
        let l = 0, r = row.length - 1

        while (l <= r){
            const mid = l + Math.floor((r - l) / 2)

            if (row[mid] === target) return true

            if (row[mid] > target)
                r = mid - 1
            else
                l = mid + 1
        }

        return false
    }
}
