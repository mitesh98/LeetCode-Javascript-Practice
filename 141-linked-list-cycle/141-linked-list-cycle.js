/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const refSet = new Set()
    let curr=head;
    while(curr){
        if(refSet.has(curr)){
            return true;
        }else{
            refSet.add(curr);
            curr=curr.next;
        }
    }
    return false;
};