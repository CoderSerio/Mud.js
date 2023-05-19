export const createCommentNode = (node) => {
  const cmt = document.createComment('if');
  node.parentNode?.replaceChild(cmt, node);
  return cmt;
};
