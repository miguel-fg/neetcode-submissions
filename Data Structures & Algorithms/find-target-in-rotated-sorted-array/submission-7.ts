class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        const pivot = this.pivot(nums)

        const res1 = this.binarySearch(nums.slice(0, pivot), target)
        const res2 = this.binarySearch(nums.slice(pivot), target)

        if (res1 >= 0)
            return res1
        
        if (res2 >= 0)
            return pivot + res2

        return -1
    }

    pivot(nums: number[]): number {
        let l = 0, r = nums.length - 1
        const last = nums[nums.length - 1] 
        let pivotIndex = 0

        while (l <= r) {
            let m = l + Math.floor((r - l) / 2)

            if (nums[m] <= last) {
                pivotIndex = m
                r = m - 1
            } else {
                l = m + 1
            }
        }

        return pivotIndex
    }

    binarySearch(nums: number[], target: number): number {
        let l = 0, r = nums.length - 1

        while (l <= r) {
            let m = l + Math.floor((r - l) / 2)

            if(nums[m] === target) return m

            if (nums[m] > target) {
                r = m - 1
            } else {
                l = m + 1
            }
        }

        return -1
    }
}
