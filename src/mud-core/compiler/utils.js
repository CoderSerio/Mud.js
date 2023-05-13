export const createCommentNode = (node) => {
    const cmt = document.createComment('m-if');
    node.parentNode.replaceChild(cmt, node);
    return cmt;
};