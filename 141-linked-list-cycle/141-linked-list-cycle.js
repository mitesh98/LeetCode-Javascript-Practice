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
    let faster=head,slower=head;
    while(faster&&faster.next){
        faster=faster.next.next;
        slower=slower.next;
        if(faster==slower){
            return true;
        }
    }
    return false;
};