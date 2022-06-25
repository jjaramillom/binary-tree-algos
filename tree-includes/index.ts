/* 
The idea is to find any value within the tree, either using Depth or Breadth first traversal
    A
   / \
  B   C
 / \   \
D   E   F

includes('A') => true
includes('X') => false

*/

const f: BinaryTreeNode<string> = { id: 'f' };
const e: BinaryTreeNode<string> = { id: 'e' };
const d: BinaryTreeNode<string> = { id: 'd' };
const b: BinaryTreeNode<string> = { id: 'b', left: d, right: e };
const c: BinaryTreeNode<string> = { id: 'c', right: f };
const a: BinaryTreeNode<string> = { id: 'a', left: b, right: c };

function breadthFirstIncludes(root: BinaryTreeNode<string> | null, targetId: string): boolean {
  if (!root) {
    return false;
  }
  const queue: BinaryTreeNode<string>[] = [a];

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

function depthFirstIncludes(root: BinaryTreeNode<string> | null, targetId: string): boolean {
  if (!root) {
    return false;
  }
  const stack: BinaryTreeNode<string>[] = [a];

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

function depthFirstRecursiveIncludes(
  root: BinaryTreeNode<string> | null,
  targetId: string
): boolean {
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
