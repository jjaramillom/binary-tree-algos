/* 
With depth-first traversal we go deep into the three (one path at a time), before trying other routes...
This algorithm uses a stack (FILO)
    A
   / \
  B   C
 / \   \
D   E   F

A=>B=>D E C=>F
*/

// Write a function that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order

const f: BinaryTreeNode = { id: 'f' };
const e: BinaryTreeNode = { id: 'e' };
const d: BinaryTreeNode = { id: 'd' };
const b: BinaryTreeNode = { id: 'b', left: d, right: e };
const c: BinaryTreeNode = { id: 'c', right: f };
const a: BinaryTreeNode = { id: 'a', left: b, right: c };

function depthFirstValues(root: BinaryTreeNode | null): string[] {
  if (!root) {
    return [];
  }
  const stack: BinaryTreeNode[] = [a];
  const values: string[] = [];

  while (stack.length) {
    const current = stack.pop();
    values.push(current.id);
    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
  }
  return values;
}

let result = depthFirstValues(a);

function recursiveDepthFIrstValues(root: BinaryTreeNode | null): string[] {
  if (!root) {
    return [];
  }
  const leftValues = recursiveDepthFIrstValues(root.left);
  const rightValues = recursiveDepthFIrstValues(root.right);

  return [root.id, ...leftValues, ...rightValues];
}

result = recursiveDepthFIrstValues(a);

// Add this to declare this file as module (own scope)
export {};
