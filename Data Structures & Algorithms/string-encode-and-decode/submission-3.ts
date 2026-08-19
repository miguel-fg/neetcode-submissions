class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        const message: string[] = []

        for (const s of strs){
            message.push(`${s.length}_${s}`)
        }

        return message.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const output: string[] = []
        let i = 0, j = 0

        while (j < str.length){
            while (str.charAt(j) !== "_") j++

            const length = parseInt(str.substring(i, j))

            i = j + 1
            j = i + length

            output.push(str.substring(i, j))
            i = j
        }

        return output
    }
}
