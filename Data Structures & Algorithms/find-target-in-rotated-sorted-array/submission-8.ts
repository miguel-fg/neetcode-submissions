class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0, r = nums.length - 1
        const lastEl = nums[r]
        let boundIndex = -1

        while (l <= r){
            const mid = l + Math.floor((r - l) / 2)

            if (nums[mid] <= lastEl){
                boundIndex = mid
                r = mid - 1
            } else {
                l = mid + 1
            }
        }

        const first = this.bSearch(nums, target, 0, boundIndex - 1)

        if (first >= 0)
            return first
        else
            return this.bSearch(nums, target, boundIndex, nums.length - 1)
    }

    bSearch(nums: number[], target: number, start: number, end: number): number {
        let l = start, r = end

        while (l <= r){
            const mid = l + Math.floor((r - l) / 2)

            if (nums[mid] === target) return mid

            if (nums[mid] > target) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        return -1
    }
}
