class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const prefix: number[] = Array(nums.length).fill(1)
        const suffix: number[] = Array(nums.length).fill(1)
        const output: number[] = Array(nums.length)

        let acc = 1
        for (let i = 1; i < nums.length; i++){
            acc *= nums[i - 1]
            prefix[i] = acc
        }

        acc = 1
        for (let i = nums.length - 2; i >= 0; i--){
            acc *= nums[i + 1]
            suffix[i] = acc
        }

        for (let i = 0; i < nums.length; i++){
            output[i] = prefix[i] * suffix[i]
        }

        return output
    }

    // [1, 2, 4, 6]

    // prefix: [1, 1, 2, 8]
    // suffix: [48, 24, 6, 1]

    // output: [48, 24, 12, 8]
}
