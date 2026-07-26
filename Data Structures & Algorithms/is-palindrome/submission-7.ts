class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {

        if (s.length === 1)
            return true

        let i = 0, j = s.length - 1

        const isAlNum = (s:string): boolean => (/[A-Za-z0-9]/.test(s))

        while (i <= j) {
            let left = s.charAt(i)
            let right = s.charAt(j)

            while (i < j && !isAlNum(left)){
                i++
                left = s.charAt(i)
            }

            while (j > i && !isAlNum(right)){
                j--
                right = s.charAt(j)
            }


            if (left.toLowerCase() !== right.toLowerCase())
                return false
            
            i++
            j--
        }

        return true
    }
    
}
