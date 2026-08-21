class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        let maxArea = 0
        const areaStack: [number, number][] = []

        for (let i = 0; i < heights.length; i++){
            if (!areaStack.length || heights[i] >= areaStack[areaStack.length - 1][1]){
                areaStack.push([i, heights[i]])
                continue
            }

            let lastPopped: [number, number]

            while (areaStack.length && heights[i] < areaStack[areaStack.length - 1][1]){
                const [start, height] = areaStack[areaStack.length - 1]
                const area = height * (i - start)
                maxArea = Math.max(maxArea, area)

                lastPopped = areaStack.pop()
            }

            areaStack.push([lastPopped[0], heights[i]])
        }

        for (let i = 0; i < areaStack.length; i++){
            const area = areaStack[i][1] * (heights.length - areaStack[i][0])
            maxArea = Math.max(maxArea, area)
        }

        return maxArea
    }
}
