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
        arr.push(p.val);
        let next = p.next;
        if(next) {
            let g = gcd(p.val, next ? next.val : 0);
            arr.push(g);
            //arr.push(next.val);
        }
        p = next;  
    }
    //console.log(arr);
    let ans = null;
    let tail = null;
    for(let i = 0; i < arr.length; i++) {
        if(!ans) {
            ans = new ListNode(arr[i]);
            tail = ans;
        } else {
            tail.next = new ListNode(arr[i]);
            tail = tail.next;
        }
    }
    return ans;
};