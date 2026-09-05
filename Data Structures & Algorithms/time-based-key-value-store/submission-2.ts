class TimeMap {
    keyStore: Map<string, [string, number][]>

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
        const val = this.keyStore.get(key) ?? []
        val.push([value, timestamp])
        this.keyStore.set(key, val)
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        const arr = this.keyStore.get(key)

        if (!arr || !arr.length) return ""

        let message = ""
        let l = 0, r = arr.length - 1

        while (l <= r){
            const mid = l + Math.floor((r - l) / 2)

            if (arr[mid][1] <= timestamp){
                message = arr[mid][0]
                l = mid + 1
            } else {
                r = mid - 1
            }
        }

        return message
    }
}
