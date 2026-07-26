class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let max = 0
        let i = 0, j = heights.length - 1

        while (i < j) {
            let area = Math.min(heights[i], heights[j]) * (j - i)
            max = Math.max(area, max)

            if(heights[i] < heights[j]){
                i++
            } else {
                j--
            }
        }

        return max
    }
}
