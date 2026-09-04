class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let sum = 0

        const maxLeft: number[] = new Array(height.length).fill(0)
        const maxRight: number[] = new Array(height.length).fill(0)
        const minSides: number[] = new Array(height.length).fill(0)

        let max = 0
        for (let i = 1; i < height.length; i++){
            max = Math.max(max, height[i - 1])
            maxLeft[i] = max
        }

        max = 0
        for (let i = height.length - 2; i >= 0; i--){
            max = Math.max(max, height[i + 1])
            maxRight[i] = max
        }

        for (let i = 0; i < height.length; i++){
            minSides[i] = Math.min(maxLeft[i], maxRight[i])
        }

        for (let i = 0; i < height.length; i++){
            const trapped = minSides[i] - height[i]
            sum += trapped >= 0 ? trapped : 0
        }

        return sum
    }
}
