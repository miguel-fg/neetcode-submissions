class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false

        const sCount: Map<string, number> = new Map()
        const tCount: Map<string, number> = new Map()

        for(const c of s) {
            sCount.set(c, (sCount.get(c) || 0) + 1)
        }
        
        for(const c of t) {
            tCount.set(c, (tCount.get(c) || 0) + 1)
        }

        for(const [key, val] of sCount){
            if (!tCount.has(key) || tCount.get(key) !== val) return false
        }

        return true
    }
}
