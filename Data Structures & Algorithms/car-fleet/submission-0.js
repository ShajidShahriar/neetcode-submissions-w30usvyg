class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let stack = []
        let cars = []
        for(let i = 0 ; i < position.length ; i++){
            cars.push([position[i],speed[i]])
        }
        cars.sort((a,b) => b[0]-a[0])


        for(let i = 0 ; i < cars.length ; i++ ){
            let carPosition = cars[i][0]
            let carSpeed = cars[i][1]

            let arrivalTime = (target - carPosition ) / carSpeed 

            if (stack.length === 0 || arrivalTime > stack[stack.length - 1]) {
                stack.push(arrivalTime);
            }
        }
        return stack.length

    }
}
