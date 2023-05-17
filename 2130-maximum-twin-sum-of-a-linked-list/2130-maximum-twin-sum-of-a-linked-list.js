/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    
    let p = head;
    let arr = [];
    while(p != null) {
        arr.push(p.val);
        p = p.next;
    }
    
    
    let i = 0;
    let j = arr.length - 1;
    let max = 0;
    while(i < j) {
        let sum = arr[i] + arr[j];
        max = sum > max ? sum : max;
        i++;
        j--;
    }
    return max;
};