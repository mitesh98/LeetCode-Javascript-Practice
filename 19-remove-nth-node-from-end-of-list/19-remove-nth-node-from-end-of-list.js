/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    let size=0;
    let curr=head;
    while(curr){
        size++;
        curr=curr.next;
    }
    if(size===n)
        return head.next;
    let start=0;
    curr=head;
    while(start<size-1-n){
        start++;
        curr=curr.next;
    }
    curr.next=curr.next.next;
    return head;
    
};