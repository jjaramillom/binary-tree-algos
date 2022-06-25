/* 
The idea is to return the sum of the values in the tree
    3
   / \
  11  4
 / \   \
4   2   1

sum() => 25

*/

// Write a function that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order
const f: BinaryTreeNode<number> = { id: 1 };
const e: BinaryTreeNode<number> = { id: 2 };
const d: BinaryTreeNode<number> = { id: 4 };
const b: BinaryTreeNode<number> = { id: 11, left: d, right: e };
const c: BinaryTreeNode<number> = { id: 4, right: f };
const a: BinaryTreeNode<number> = { id: 3, left: b, right: c };

function breadthFirstSum(root: BinaryTreeNode<number> | null): number {
  if (!root) {
    return 0;
  }
  const queue: BinaryTreeNode<number>[] = [a];
  let sum = 0;

  while (queue.length) {
    const current = queue.shift();
    sum += current.id;
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return sum;
}

let result = breadthFirstSum(a);

function depthFirstSum(root: BinaryTreeNode<number> | null): number {
  if (!root) {
    return 0;
  }
  const stack: BinaryTreeNode<number>[] = [a];
  let sum = 0;

  while (stack.length) {
    const current = stack.pop();
    sum += current.id;
    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
  }
  return sum;
}

result = depthFirstSum(a);

function depthFirstRecursiveSum(root: BinaryTreeNode<number> | null): number {
  if (!root) {
    return 0;
  }

  return root.id + depthFirstRecursiveSum(root.left) + depthFirstRecursiveSum(root.right);
}

result = depthFirstRecursiveSum(a);

console.log(result);

// Add this to declare this file as module (own scope)
export {};
