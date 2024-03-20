/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    
    let aprev = null;
    let bnode = null;
    let prev = null;
    let p = list1;
    let count = 0;
    while(p) {
        //console.log(p.val)
        if(count == a) {
            aprev = prev;
        }
        if(count == b) {
            bnode = p;
        }
        prev = p;
        count++;
        p = p.next;
    }
    //console.log(aprev.val, bnode.val);
    p = list2;
    let last = null;
    while(p) {
        last = p;
        p = p.next;
    }
    if(aprev) {
        aprev.next = list2;
        bnode ? last.next = bnode.next : null;
        return list1;
    } else {
        bnode ? last.next = bnode.next : null;
        return list2;
    }
};