/* 
The idea is to find any value within the tree, either using Depth or Breadth first traversal
    A
   / \
  B   C
 / \   \
D   E   F

*/

// Write a function that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order
const f: BinaryTreeNode = { id: 'f' };
const e: BinaryTreeNode = { id: 'e' };
const d: BinaryTreeNode = { id: 'd' };
const b: BinaryTreeNode = { id: 'b', left: d, right: e };
const c: BinaryTreeNode = { id: 'c', right: f };
const a: BinaryTreeNode = { id: 'a', left: b, right: c };

function breadthFirstIncludes(root: BinaryTreeNode | null, targetId: string): boolean {
  if (!root) {
    return false;
  }
  const queue: BinaryTreeNode[] = [a];

  while (queue.length) {
    const current = queue.shift();
    if (current.id === targetId) {
      return true;
    }
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return false;
}

let result = breadthFirstIncludes(a, 'c');

function depthFirstIncludes(root: BinaryTreeNode | null, targetId: string): boolean {
  if (!root) {
    return false;
  }
  const stack: BinaryTreeNode[] = [a];

  while (stack.length) {
    const current = stack.pop();
    if (current.id === targetId) {
      return true;
    }
    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
  }
  return false;
}

result = depthFirstIncludes(a, 'x');

function depthFirstRecursiveIncludes(root: BinaryTreeNode | null, targetId: string): boolean {
  if (!root) {
    return false;
  }
  if (root.id === targetId) {
    return true;
  }

  return (
    depthFirstRecursiveIncludes(root.left, targetId) ||
    depthFirstRecursiveIncludes(root.left, targetId)
  );
}

result = depthFirstRecursiveIncludes(a, 'a');

console.log(result);

// Add this to declare this file as module (own scope)
export {};
