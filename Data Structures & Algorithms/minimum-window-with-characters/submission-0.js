class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        if (t.length > s.length) return "";
        const t_map = new Map()
        const window_map = new Map()
        
        
        for (let i = 0; i < t.length ; i++){
            t_map.set(t[i] , (t_map.get(t[i]) || 0) + 1 )
        }

        let have = 0
        let need = t_map.size


        let result = [-1,-1]
        let min_length = Infinity 

        let left = 0

        for (let right = 0 ; right < s.length ; right++){
            let current = s[right]

            window_map.set(current , (window_map.get(current) || 0 ) + 1)

            if(t_map.has(current) &&  window_map.get(current) === t_map.get(current)){
                have++
            }

            while(have === need){
                if( right - left + 1 < min_length ){
                    result = [left,right]
                    min_length = right - left + 1
                }

                let leftchar= s[left]
                window_map.set(leftchar,(window_map.get(leftchar) || 0 ) - 1)
                
                if( t_map.has(leftchar) && window_map.get(leftchar) < t_map.get(leftchar)){
                    have -=1
                }
                left+=1
            }

           

        }
          if (min_length === Infinity) {
            return "";
            } else {
            return s.slice(result[0], result[1] + 1);
        }

    
    }
}
