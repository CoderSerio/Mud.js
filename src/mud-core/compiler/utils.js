export const createCommentNode = (node, oldNode) => {
  if (oldNode) {
    oldNode.parentNode ? {} : node.parentNode.replaceChild(oldNode, node);
    return oldNode;
  }
  else {
    const cmt = document.createComment('if');
    node.parentNode.replaceChild(cmt, node);
    return cmt;
  }
};
export const returnNode = (node, oldNode) => {
  oldNode.parentNode.replaceChild(node, oldNode);
};

export const addIfNodeList = (node, name, value) => {
  let nodeList = [];
  nodeList.push({
    node: node,
    name: name,
    value: value
  });
  function add(node) {
    if (node.nextElementSibling.attributes[0] === undefined) {
      return nodeList;
    }
    const { name, value } = node.nextElementSibling.attributes[0];
    if (name === "else-if") {
      nodeList.push({
        node: node.nextElementSibling,
        name: name,
        value: value
      });
      return add(node.nextElementSibling);
    } else if (name === "else") {
      nodeList.push({
        node: node.nextElementSibling,
        name: name,
        value: value
      });
      return nodeList;
    }
    else {
      return nodeList;
    }
  }

  return add(node);
};