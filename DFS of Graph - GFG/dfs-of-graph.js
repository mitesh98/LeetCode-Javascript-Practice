//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(
        string => { return string.trim(); });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(' ');
        let V = parseInt(input_line[0]);
        let E = parseInt(input_line[1]);

        let adj = new Array(V);
        for (let i = 0; i < V; i++) {
            adj[i] = new Array();
        }
        for (let i = 0; i < E; i++) {
            input_line = readLine().split(' ');
            let x = input_line[0];
            let y = input_line[1];
            adj[x].push(y);
            adj[y].push(x);
        }

        let obj = new Solution();
        let ans = obj.dfsOfGraph(V, adj);
        let s = "";
        for (let i = 0; i < ans.length; i++) {
            s += ans[i];
            s += " ";
        }
        console.log(s);
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
*/
let visited=new Set()
let result=[]
function dfs(V,adj){
    result.push(V)
     visited.add(V)
    //  console.log(adj[V])
      for(let i=0;i< adj[V].length;i++){
            if(!visited.has(adj[V][i])){
                dfs(adj[V][i],adj)
            }
        }
}
class Solution {
    // Function to return a list containing the DFS traversal of the graph.
    
    dfsOfGraph(V, adj) {
        // console.log(V,adj[V])
       result=[]
       visited=new Set()
       
        dfs('0',adj)
        return result
        
    }
}