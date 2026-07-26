class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const res: [number, number, number][] = []

        nums.sort((a, b) => a - b)

        let i = 0

        while (i < nums.length - 2){
            let j = i + 1, k = nums.length - 1

            while (j < k) {
                let sum = nums[i] + nums[j] + nums[k]

                if (sum === 0){
                    res.push([nums[i], nums[j], nums[k]])

                    j++
                    k--

                    while (nums[j] === nums[j - 1]) j++
                    while (nums[k] === nums[k + 1]) k--
                } else if (sum > 0) {
                    k--
                } else {
                    j++
                }
            }

            i++
            while (nums[i] === nums[i - 1]) i++
        }

        return res
    }
}
