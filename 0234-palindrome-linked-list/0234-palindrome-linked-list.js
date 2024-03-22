/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let getmid = () => {
        let slow = head
        let fast = head
        let prev = null
        while(fast && fast.next) {
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        return [prev,slow]
    }
    
    let [prevofmid, mid] = getmid()
    let curr = mid
    let prev = null
    while(curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    
    let p1 = prev, p2 = head, ans = true
    while(p1 && p2) {
        if(p1.val != p2.val) { 
            ans = false
            break
        } 
        p1 = p1.next
        p2 = p2.next
    }
    
    
    /* revert link list to original state */
    curr = prev
    prev = null
    while(curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    if(prevofmid) {
        prevofmid.next = prev
    }
    return ans
};