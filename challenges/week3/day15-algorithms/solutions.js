// Problem 1: Validate BST
// Return true if the binary tree is a valid binary search tree
// Time: O(?) Space: O(?)
function isValidBST(root, min = -Infinity, max = Infinity) {
  // TODO: recursion with min/max bounds
}

// Problem 2: Connected Components
// Input: n (num nodes), edges [[a,b],...] — return number of connected components
// Time: O(?) Space: O(?)
function countComponents(n, edges) {
  // TODO: build adjacency list, BFS/DFS with visited set
}

// Problem 3: Clone Graph
// Input: node { val, neighbors[] } — return deep clone of connected graph
// Time: O(?) Space: O(?)
function cloneGraph(node) {
  // TODO: HashMap of original → clone, DFS/BFS
}

// --- Tree helper ---
function TreeNode(val, left=null, right=null) { return {val,left,right}; }

// Tests
console.log('\nValidate BST:');
const validBST = TreeNode(2, TreeNode(1), TreeNode(3));
const invalidBST = TreeNode(5, TreeNode(1), TreeNode(4, TreeNode(3), TreeNode(6)));
console.log(isValidBST(validBST));   // true
console.log(isValidBST(invalidBST)); // false

console.log('\nConnected Components:');
console.log(countComponents(5, [[0,1],[1,2],[3,4]])); // 2
console.log(countComponents(5, [[0,1],[1,2],[2,3],[3,4]])); // 1
console.log(countComponents(4, [])); // 4

console.log('\nClone Graph: (manual inspection)');
function GraphNode(val, neighbors=[]) { return {val,neighbors}; }
const n1 = GraphNode(1); const n2 = GraphNode(2); const n3 = GraphNode(3);
n1.neighbors = [n2,n3]; n2.neighbors = [n1]; n3.neighbors = [n1];
const cloned = cloneGraph(n1);
console.log('Cloned val:', cloned?.val); // 1
console.log('Is different object:', cloned !== n1); // true
