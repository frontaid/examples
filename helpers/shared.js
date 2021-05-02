const isUserProp = key => !key.startsWith(':');
const isListNode = node => ':items' in node;
const isFieldNode = node => ':type' in node;

/**
 * @param {object} model
 * @return {string[][]}
 */
function getNodePaths(model) {
  const paths = [];
  for (const prop in model) {
    const node = model[prop];
    if (isUserProp(prop) && !isListNode(node)) {
      if (isFieldNode(node)) {
        paths.push([prop]);
      } else {
        getNodePaths(node).forEach(subPaths => paths.push([prop, ...subPaths]));
      }
    }
  }
  return paths;
}

module.exports = {
  getNodePaths,
};
