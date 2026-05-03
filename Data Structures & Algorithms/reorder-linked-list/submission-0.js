class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next) return;
        
        let slow = head 
        let fast = head 

        while (fast !== null && fast.next !== null){
            slow = slow.next 
            fast = fast.next.next 
        }

        let prev = null 
        let curr = slow.next 
        slow.next = null    

        while (curr !== null){
            let next = curr.next 
            curr.next = prev 
            prev = curr 
            curr = next 
        }

        let l1 = head
        let l2 = prev 

        while (l2 !== null){
            let temp1 = l1.next 
            let temp2 = l2.next 

            l1.next = l2
            l2.next = temp1 
            l1 = temp1 
            l2 = temp2
        }
        
    }
}