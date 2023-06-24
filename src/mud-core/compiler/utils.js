/** 注释节点 */
export const createCommentNode = (node, oldNode) => {
  if (oldNode) {
    oldNode.parentNode ? {} : node.parentNode.replaceChild(oldNode, node);
    return oldNode;
  } else {
    const cmt = document.createComment('if');
    node.parentNode.replaceChild(cmt, node);
    return cmt;
  }
};

/** 还原节点 */
export const restoreValue = (node, oldNode) => {
  oldNode.parentNode.replaceChild(node, oldNode);
};

/** 更新if列表 */
export const updateIfNodeList = (node, name, value) => {
  const nodeList = [];

  nodeList.push({
    node,
    name,
    value
  });

  const add = (node) => {
    const curNode = node?.nextElementSibling;
    if (!curNode?.attributes?.[0]) {
      return nodeList;
    }
    const { name, value } = curNode.attributes[0];
    if (name === "else-if") {
      nodeList.push({
        node: curNode,
        name,
        value
      });
      return add(curNode);
    } else if (name === "else") {
      nodeList.push({
        node: curNode,
        name,
        value
      });
      return nodeList;
    } else {
      return nodeList;
    }
  };

  return add(node);
};

/** 批量更新注释 */
export const batchUpdateComment = (ifValue, isCommentedMap, ifNodeList, oldList, key, start = 0) => {
  const len = ifNodeList?.length ?? 0;
  if (ifValue) {  // 恢复为原值并修改状态记录表
    if (isCommentedMap.get(oldList[key])) {
      restoreValue(ifNodeList[key].node, oldList[key]);
      isCommentedMap.set(oldList[key], false);
    }
    for (let i = start; i < len; i++) {
      oldList[i] = createCommentNode(ifNodeList[i].node, oldList[i]);
      isCommentedMap.set(oldList[i], true);
    }
    return true;
  } else { // 注释当前节点
    oldList[key] = createCommentNode(ifNodeList[key].node, oldList[key]);
    isCommentedMap.set(oldList[key], true);
  }
  return false;
};