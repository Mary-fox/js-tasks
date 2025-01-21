import './style.css';
import data from './data'; // { value: number, children?: [] }

const result = {
  topNode: getNode(2),
  deepNode: getDeepNode(5),
};

document.getElementById('pre').innerHTML = JSON.stringify({ result }, null, 2);

/**
 * Возвращает первую попавшуюся ноду по переданному nodeValue
 *
 * @param {*number} nodeValue
 */
function getNode(nodeValue) {
  function findNode(node) {
    if (node.value === nodeValue) {
      return node;
    }
    if (node.children) {
      for (const child of node.children) {
        const result = findNode(child);
        if (result) {
          return result;
        }
      }
    }
  }
  return findNode(data);
}

/**
 * Возвращает самую глубокую ноду по переданному nodeValue
 *
 * @param {*number} nodeValue
 */
function getDeepNode(nodeValue) {
  function findDeepestNode(node, depth = 0) {
    let deepestNode = null;
    let maxDepth = -1;

    function traverse(currentNode, currentDepth) {
      if (currentNode.value === nodeValue) {
        if (currentDepth > maxDepth) {
          maxDepth = currentDepth;
          deepestNode = currentNode;
        }
      }
      if (currentNode.children) {
        for (const child of currentNode.children) {
          traverse(child, currentDepth + 1);
        }
      }
    }
    traverse(node, depth);
    return deepestNode;
  }
  return findDeepestNode(data, nodeValue);
}
export default {
    value: 1,
    children: [
      {
        value: 2,
        children: [
          {
            value: 5,
          },
          {
            value: 6,
          },
          {
            value: 7,
          },
        ],
      },
      {
        value: 3,
        children: [
          {
            value: 5,
          },
          {
            value: 6,
          },
          {
            value: 7,
            children: [
              {
                value: 2,
              },
              {
                value: 3,
              },
              {
                value: 4,
              },
            ],
          },
        ],
      },
    ],
  };
  