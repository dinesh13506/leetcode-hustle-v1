/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function(m, n, head) {
    //when there is no col next chose next row
    // when there is no row to explore chose next col
    // when both are not there choose new 
    let p = head;
    let matrix = new Array(m);
    for(let i = 0; i < m; i++) {
        matrix[i] = new Array(n);
        matrix[i].fill(-1);
    }
    
    let p1 = 0, p2 = n, p3 = 0, p4 = m;
    while(p) {
        //console.log(p)
        //console.log(matrix)
        for(let c = p1; c <  p2; c++) {
            matrix[p3][c] = p ? p.val : -1;
            p = p ? p.next : null;
            if(!p) break;
        }
        if(!p) break;
        for(let r = p3 + 1 ; r < p4 ; r++) {
            matrix[r][p2 -1] = p ? p.val : -1;
            p = p ? p.next : null;
           
        }
        if(!p) break;
        for(let c = p2 - 2; c >= p1 ; c--) {
            matrix[p4-1][c] = p ? p.val : -1;
            p = p ? p.next : null;
           
        }
        if(!p) break;
        
        for(let r = p4-2 ; r > p3; r--) {
            matrix[r][p1] = p ? p.val : -1;
            p = p ? p.next : null;
            if(!p) break;
        }
        p1++;
        p2--;
        p3++;
        p4--;
    }
    
    
    return matrix;
    
};