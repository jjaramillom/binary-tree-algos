/* 
The idea is to find the path with the largest sum.
    5
   / \
  11  4
 / \   \
4   2   1

largestSum()=>5+11+4=20
*/

const f: BinaryTreeNode<number> = { id: 1 };
const e: BinaryTreeNode<number> = { id: 2 };
const d: BinaryTreeNode<number> = { id: 4 };
const b: BinaryTreeNode<number> = { id: 11, left: d, right: e };
const c: BinaryTreeNode<number> = { id: 4, right: f };
const a: BinaryTreeNode<number> = { id: 5, left: b, right: c };

function depthFirstRecursiveMaxSum(root: BinaryTreeNode<number> | null): number {
  if (!root) {
    return 0;
  }

  const leftSum = depthFirstRecursiveMaxSum(root.left);
  const rightSum = depthFirstRecursiveMaxSum(root.right);

  return Math.max(leftSum, rightSum) + root.id;
}

let result = depthFirstRecursiveMaxSum(a);

console.log(result);

// Add this to declare this file as module (own scope)
export {};
