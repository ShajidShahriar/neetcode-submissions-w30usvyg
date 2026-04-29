class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let left = 0 
        const s1Freq = new Map()
        const windowFreq = new Map()

        for(let i = 0 ; i < s1.length ;i++){
            s1Freq.set(s1[i] , (s1Freq.get(s1[i]) || 0 ) + 1 )
            windowFreq.set(s2[i] , (windowFreq.get(s2[i]) || 0 ) + 1 )
        }
        if(this.sameMap(s1Freq , windowFreq)) return true 

        for (let right = s1.length ; right < s2.length ; right++){
            windowFreq.set(s2[right], (windowFreq.get(s2[right]) || 0 ) + 1 )
            windowFreq.set(s2[left] , windowFreq.get(s2[left]) - 1 )
            if (windowFreq.get(s2[left]) === 0){
                windowFreq.delete(s2[left])
            }
            left++
            if(this.sameMap(s1Freq , windowFreq)) return true 

        }
        return false 

    }
    sameMap(map1,map2){
            if (map1.size !== map2.size) return false
            for(const [char, count] of map1){
                if (map2.get(char) !== count ) return false
            }
            return true
        }
}
