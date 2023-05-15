/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    
    let node1 = null;
    
    let p = head;
    let c = 0;
    let n = 0;
    while(p != null) {
        c++;
        if(c == k) {
            node1 = p;
        }
        n++;
        p = p.next;
    }
    let stack = [];
    p = head;
    while(p != null) {
        if(stack.length == n - k + 1) {
            break;
        }
        stack.push(p);
        p = p.next;
    }
    
    let node2 = stack.pop();
    console.log(node1.val, node2.val);
    let t = node1.val;
    node1.val = node2.val;
    node2.val = t;
    return head;
};