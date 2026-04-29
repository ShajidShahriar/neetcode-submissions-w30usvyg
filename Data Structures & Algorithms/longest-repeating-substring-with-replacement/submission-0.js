class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left  = 0 
        let maxCount = 0
        let result = 0
        let count = new Map()
        
        for (let right = 0 ; right < s.length ;right++){
            const current = s[right]
            count.set(current,(count.get(current) || 0) + 1)
            maxCount = Math.max(maxCount, count.get(current))
            
            while (right - left + 1 - maxCount > k ){
                count.set(s[left],(count.get(s[left]) - 1))
                left++
            } 

            result = Math.max(result , right - left + 1)

            
        }
        return result 
    }
}
