/* 
With breadth-first traversal we go one level at a time before going deeper into other routes...
This algorithm uses a queue (FIFO)
    A
   / \
  B   C
 / \   \
D   E   F

A=>B=>C=>D=>E=>F
*/

// Write a function that takes in the root of a binary tree. The function should return an array containing all values of the tree in breadth-first order

const f: BinaryTreeNode = { id: 'f' };
const e: BinaryTreeNode = { id: 'e' };
const d: BinaryTreeNode = { id: 'd' };
const b: BinaryTreeNode = { id: 'b', left: d, right: e };
const c: BinaryTreeNode = { id: 'c', right: f };
const a: BinaryTreeNode = { id: 'a', left: b, right: c };

function breadthFirstValues(root: BinaryTreeNode | null): string[] {
  if (!root) {
    return [];
  }
  const queue: BinaryTreeNode[] = [a];
  const values: string[] = [];

  while (queue.length) {
    const current = queue.shift();
    values.push(current.id);
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return values;
}

breadthFirstValues(a);

export {};
