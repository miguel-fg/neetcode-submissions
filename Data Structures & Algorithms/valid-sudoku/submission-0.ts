class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rowMap: Map<number, Set<string>> = new Map([
            [0, new Set()],
            [1, new Set()],
            [2, new Set()],
            [3, new Set()],
            [4, new Set()],
            [5, new Set()],
            [6, new Set()],
            [7, new Set()],
            [8, new Set()],
        ])

        const colMap: Map<number, Set<string>> = new Map([
            [0, new Set()],
            [1, new Set()],
            [2, new Set()],
            [3, new Set()],
            [4, new Set()],
            [5, new Set()],
            [6, new Set()],
            [7, new Set()],
            [8, new Set()],
        ])        
        
        const boxMap: Map<string, Set<string>> = new Map([
            ["00", new Set()], // i -> 0, 1, 2 | j -> 0, 1, 2
            ["01", new Set()], // i -> 0, 1, 2 | j -> 3, 4, 5
            ["02", new Set()], // i -> 0, 1, 2 | j -> 6, 7, 8
            ["10", new Set()],
            ["11", new Set()],
            ["12", new Set()],
            ["20", new Set()],
            ["21", new Set()],
            ["22", new Set()],
        ])

        for (let i = 0; i < board.length; i++){
            for (let j = 0; j < board[i].length; j++){
                if (board[i][j] === ".") continue

                const val = board[i][j]

                const rowSet = rowMap.get(i)
                const colSet = colMap.get(j)

                const boxKey: string = [Math.floor(i / 3), Math.floor(j / 3)].join('')
                const boxSet = boxMap.get(boxKey)

                if (rowSet.has(val) || colSet.has(val) || boxSet.has(val)) 
                    return false

                rowMap.set(i, rowSet.add(val))
                colMap.set(j, colSet.add(val))
                boxMap.set(boxKey, boxSet.add(val))
                
            }
        }
        return true
    }
}
