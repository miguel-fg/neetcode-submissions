class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let i = 0, j = numbers.length - 1
        const res: [number, number] = [-1, -1]

        while (i < j) {
            let sum = numbers[i] + numbers[j]

            if (sum < target){
                sum -= numbers[i]
                i++
            } else if (sum > target){
                sum -= numbers[j]
                j--
            } else {
                res[0] = i + 1
                res[1] = j + 1
                break
            }
        }

        return res
    }
}
