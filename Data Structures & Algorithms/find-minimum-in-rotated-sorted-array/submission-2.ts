class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        const lastEl = nums[nums.length - 1]
        let l = 0, r = nums.length - 1
        let min = nums[0]

        while (l <= r) {
            let m = l + Math.floor((r - l) / 2)

            if (nums[m] <= lastEl) {
                min = nums[m]
                r = m - 1
            } else {
                l = m + 1
            }
        }

        return min
    }
}
