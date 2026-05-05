// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {

        if (head === null) return null;
        let current = head 
        let map = new Map()
        
        while (current !== null){
            map.set(current , new Node(current.val,null,null))
            current = current.next 
        }
        current = head 
        while (current !== null){
            let clone = map.get(current)

            if(current.next !== null){
                clone.next = map.get(current.next)
            }
            if(current.random !== null){
                clone.random = map.get(current.random)
            }
            current = current.next
        }

        return map.get(head)

    }
}
