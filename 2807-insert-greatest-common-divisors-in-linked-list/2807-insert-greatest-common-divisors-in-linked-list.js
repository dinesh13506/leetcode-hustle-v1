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
var gcd = function(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}
var insertGreatestCommonDivisors = function(head) {
    
    let p = head;
    let arr = [];
    while(p) {
        //arr.push(p.val);
        let next = p.next;
        if(next) {
            let g = gcd(p.val, next ? next.val : 0);
            let gnode = new ListNode(g);
            gnode.next = p.next;
            p.next = gnode;
            p = gnode.next;
        } else {
            break;
        }
    }
    //console.log(head)
    
    return head;
};