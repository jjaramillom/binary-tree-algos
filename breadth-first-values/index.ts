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

const f: BinaryTreeNode<string> = { id: 'f' };
const e: BinaryTreeNode<string> = { id: 'e' };
const d: BinaryTreeNode<string> = { id: 'd' };
const b: BinaryTreeNode<string> = { id: 'b', left: d, right: e };
const c: BinaryTreeNode<string> = { id: 'c', right: f };
const a: BinaryTreeNode<string> = { id: 'a', left: b, right: c };

function breadthFirstValues(root: BinaryTreeNode<string> | null): string[] {
  if (!root) {
    return [];
  }
  const queue: BinaryTreeNode<string>[] = [a];
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
