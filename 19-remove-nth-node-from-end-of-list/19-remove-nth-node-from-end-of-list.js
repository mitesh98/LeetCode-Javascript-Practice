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
    if(head===null)
        return head;
   let fp=head,sp=head,start=1;
    while(start<n+1){
        sp=sp.next;
        start++;
    }
    if(sp===null){
        return head.next;
    }
    while(sp.next){
        sp=sp.next;
        fp=fp.next;
    }
    fp.next=fp.next.next;
    return head;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
};