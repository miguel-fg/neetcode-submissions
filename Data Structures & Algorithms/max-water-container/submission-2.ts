class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let i = 0, j = heights.length - 1
        let max = 0

        while (i < j){
            const area = Math.min(heights[i], heights[j]) * (j - i)
            max = Math.max(max, area)

            if (heights[i] < heights[j]){
                i++
            } else {
                j--
            }
        }

        return max
    }
}
