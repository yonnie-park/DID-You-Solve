function solution(v, q) {
  const n = v.length;
  const tree = buildTree(v);
  const results = [];

  for (let i = 0; i < q.length; i++) {
    const [a, b, c] = q[i];

    if (a === 1) {
      const sum = getSum(tree, b, c, 1, 0, n - 1);
      results.push(sum);
    } else if (a === 2) {
      const diff = c - v[b];
      v[b] = c;
      updateTree(tree, 1, 0, n - 1, b, diff);
    }
  }

  return results;
}

function buildTree(v) {
  const n = v.length;
  const tree = new Array(n * 4);

  const init = (node, nodeStart, nodeEnd) => {
    if (nodeStart === nodeEnd) {
      tree[node] = v[nodeStart];
      return;
    }

    const mid = Math.floor((nodeStart + nodeEnd) / 2);
    init(node * 2, nodeStart, mid);
    init(node * 2 + 1, mid + 1, nodeEnd);
    tree[node] = tree[node * 2] + tree[node * 2 + 1];
  };

  init(1, 0, n - 1);

  return tree;
}

function getSum(tree, start, end, node, nodeStart, nodeEnd) {
  if (nodeStart > end || nodeEnd < start) {
    return 0;
  }

  if (nodeStart >= start && nodeEnd <= end) {
    return tree[node];
  }

  const mid = Math.floor((nodeStart + nodeEnd) / 2);
  const left = getSum(tree, start, end, node * 2, nodeStart, mid);
  const right = getSum(tree, start, end, node * 2 + 1, mid + 1, nodeEnd);

  return left + right;
}

function updateTree(tree, node, nodeStart, nodeEnd, index, diff) {
  if (nodeStart > index || nodeEnd < index) {
    return;
  }

  tree[node] += diff;

  if (nodeStart === nodeEnd) {
    return;
  }

  const mid = Math.floor((nodeStart + nodeEnd) / 2);
  updateTree(tree, node * 2, nodeStart, mid, index, diff);
  updateTree(tree, node * 2 + 1, mid + 1, nodeEnd, index, diff);
}
