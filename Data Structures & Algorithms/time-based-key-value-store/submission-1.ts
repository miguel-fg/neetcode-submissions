class TimeMap {
    keyStore: Map<string, [string, number][]>;

    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        const arr = this.keyStore.get(key) || []
        arr.push([value, timestamp])
        this.keyStore.set(key, arr)
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        if (!this.keyStore.has(key) || this.keyStore.get(key).length === 0) {
            return ""
        }

        const vals = this.keyStore.get(key)
        let l = 0, r = vals.length - 1
        let mostRecent = ""

        while (l <= r) {
            let m = l + Math.floor((r - l) / 2)

            if (vals[m][1] <= timestamp) {
                mostRecent = vals[m][0]
                l = m + 1
            } else {
                r = m - 1
            }
        }

        return mostRecent
    }
}
