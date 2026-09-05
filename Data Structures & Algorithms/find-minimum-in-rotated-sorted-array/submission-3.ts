class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let min = Infinity 
        const lastEl = nums[nums.length - 1]
        let l = 0, r = nums.length -1

        while (l <= r){
            const mid = l + Math.floor((r - l) / 2)

            if (nums[mid] <= lastEl) {
                min = nums[mid]
                r = mid - 1
            } else {
                l = mid + 1
            }
        }

        return min
    }
}
