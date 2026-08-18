class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const ans: Map<string, string[]> = new Map()

        for (const str of strs) {
            const count = Array(26).fill(0)

            for (const c of str) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }

            const key = count.join(',');
            if (ans.has(key)){
                ans.get(key).push(str)
            } else {
                ans.set(key, [str])
            }
        }

        return Array.from(ans.values())
    }
}
