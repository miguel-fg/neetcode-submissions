class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let maxL = height[0], maxR = height[height.length - 1]
        let l = 0, r = height.length - 1

        let water = 0
        while (l < r) {
            if (maxL <= maxR){
                l++
                const trapped = maxL - height[l]
                water += trapped >= 0 ? trapped : 0 

                maxL = Math.max(maxL, height[l])
            } else {
                r--
                const trapped = maxR - height[r]
                water += trapped >= 0 ? trapped : 0

                maxR = Math.max(maxR, height[r])
            }
        }

        return water
    }
}
