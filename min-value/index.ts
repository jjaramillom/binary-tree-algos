/* 
The idea is to get the min value from the tree
    3
   / \
  11  4
 / \   \
4   2   1

min()=>1
*/

const f: BinaryTreeNode<number> = { id: 1 };
const e: BinaryTreeNode<number> = { id: 2 };
const d: BinaryTreeNode<number> = { id: 4 };
const b: BinaryTreeNode<number> = { id: 11, left: d, right: e };
const c: BinaryTreeNode<number> = { id: 4, right: f };
const a: BinaryTreeNode<number> = { id: 3, left: b, right: c };

function breadthFirstMin(root: BinaryTreeNode<number> | null): number | null {
  if (!root) {
    return null;
  }
  const queue: BinaryTreeNode<number>[] = [a];
  let min = root.id;

  while (queue.length) {
    const current = queue.shift();
    if (current.id < min) {
      min = current.id;
    }
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return min;
}

let result = breadthFirstMin(a);

function depthFirstMin(root: BinaryTreeNode<number> | null): number | null {
  if (!root) {
    return null;
  }
  const stack: BinaryTreeNode<number>[] = [a];
  let min = root.id;

  while (stack.length) {
    const current = stack.pop();
    if (current.id < min) {
      min = current.id;
    }
    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
  }
  return min;
}

result = depthFirstMin(a);

function depthFirstRecursiveMin(root: BinaryTreeNode<number> | null): number | null {
  if (!root) {
    return null;
  }

  const leftMin = depthFirstRecursiveMin(root.left);
  const rightMin = depthFirstRecursiveMin(root.right);

  return Math.min(
    ...[
      root.id,
      ...(leftMin !== null ? [leftMin] : []),
      ...(rightMin !== null ? [rightMin] : []),
    ]
  );
}

result = depthFirstRecursiveMin(a);

console.log(result);

// Add this to declare this file as module (own scope)
export {};
