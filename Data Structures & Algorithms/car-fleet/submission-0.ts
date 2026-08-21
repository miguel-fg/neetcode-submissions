class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const fleet: [number, number][] = []
        const cars: [number, number][] = []

        for (let i = 0; i < position.length; i++){
            cars.push([position[i], speed[i]])
        }

        cars.sort((a, b) => a[0] - b[0])

        fleet.push(cars[cars.length - 1])

        for (let i = cars.length - 2; i >= 0; i--){
            const fleetTop = fleet[fleet.length - 1]

            const currTimeToTarget = (target - cars[i][0]) / cars[i][1]
            const fleetTopTimeToTarget = (target - fleetTop[0]) / fleetTop[1] 

            if (currTimeToTarget <= fleetTopTimeToTarget) continue

            fleet.push(cars[i])
        }

        return fleet.length
    }
}
