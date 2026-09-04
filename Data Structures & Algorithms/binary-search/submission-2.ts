class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let i = 0, j = nums.length - 1

        while (i <= j){
            let mid = i + Math.floor((j - i) / 2)

            if (nums[mid] === target) return mid

            if (nums[mid] > target)
                j = mid - 1
            else 
                i = mid + 1
        }

        return - 1
    }
}
