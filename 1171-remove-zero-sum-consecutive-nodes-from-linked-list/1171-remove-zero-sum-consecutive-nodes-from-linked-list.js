/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function(head) {
    
    let dummy = new ListNode(0, head);
    let start = dummy;
    while(start) {
        let end = start.next;
        let sum = 0;
        while(end) {
            sum += end.val;
            if(sum == 0) {
                start.next = end.next;
            }
            end = end.next;
        }
        start = start.next;
    }
    return dummy.next;
    
};