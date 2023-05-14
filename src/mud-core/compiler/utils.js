export const useDataValue = (mud, keyStr, newValue) => {
  const keys = keyStr.split('.');

  if (keys.length > 1) {
    const key = keys.pop();
    const data = keys.reduce((res, item) => {
      return res[item];
    }, mud.data);
    return [data[key], (newValue) => {
      data[key] = newValue;
    }];
  } else {
    const key = keys[0];
    const data = mud.data;
    return [data[key], (newValue) => {
      data[key] = newValue;
    }];
  }
};

export const createCommentNode = (node) => {
  const cmt = document.createComment('if');
  node.parentNode.replaceChild(cmt, node);
  return cmt;
};
