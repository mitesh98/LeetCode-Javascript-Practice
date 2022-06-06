/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(list1===null)
        return list2;
    if(list2===null)
        return list1;
    
    let current1,current2,currentResList,headResList;
    
    if(list1.val<list2.val){
        headResList=new ListNode(list1.val);
        current1=list1.next;
        current2=list2;
    }else{
        headResList=new ListNode(list2.val);
        current1=list1;
        current2=list2.next;
    }
    currentResList=headResList;
    // console.log(currentResList)
    while(current1!==null&&current2!==null){
        if(current1.val<current2.val){
            currentResList.next=new ListNode(current1.val);
            current1=current1.next;
        }
        else{
            currentResList.next=new ListNode(current2.val);
            current2=current2.next;
        }
        currentResList=currentResList.next
    }
    if(current1!==null){
        currentResList.next=current1;
    }
    if(current2!==null){
        currentResList.next=current2;
    }
    return headResList;
};







































