class Solution {
  /**
   * @param {number[]} nums1
   * @param {number[]} nums2
   * @return {number}
   */
  findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const [smaller, larger] = nums1.length < nums2.length ? [nums1, nums2] : [nums2, nums1];
    const total = nums1.length + nums2.length;
    const half = Math.floor(total / 2);

    let l = 0,
      r = smaller.length - 1;

    while (1) {
      const i = l + Math.floor((r - l) / 2);
      const j = half - i - 2;

      const smallerLeft = i >= 0 ? smaller[i] : -Infinity;
      const smallerRight = i + 1 < smaller.length ? smaller[i + 1] : Infinity;
      const largerLeft = j >= 0 ? larger[j] : -Infinity;
      const largerRight = j + 1 < larger.length ? larger[j + 1] : Infinity;

      if (smallerLeft <= largerRight && largerLeft <= smallerRight) {
        if (total % 2 === 1) {
          return Math.min(smallerRight, largerRight);
        } else {
          return (Math.max(smallerLeft, largerLeft) + Math.min(smallerRight, largerRight)) / 2;
        }
      } else if (smallerLeft > largerRight) {
        r = i - 1
      } else {
        l = i + 1
      }
    }
  }
}
