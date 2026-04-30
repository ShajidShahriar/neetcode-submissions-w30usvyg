class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        const rows = matrix.length
        const columns = matrix[0].length 
        let left = 0
        let right = ( rows * columns ) - 1

        while (left <= right){
            const mid = Math.floor((left + right) / 2)
            const row = Math.floor(mid / columns)
            const column = mid % columns 

            let current = matrix[row][column]

            if(current === target) return true 

            if(current > target){
                right = mid - 1
            }
            else{
                left = mid + 1
            }



        }
        return false 
    }
}
