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
var middleNode = function(head) {
    let slower=head;
    let faster=head;
    while(faster!==null&&faster.next!==null){
        faster=faster.next.next
        slower=slower.next

    }
    return slower;
};