class VNode {
  constructor(nodeType, tag, props) {
    this.nodeType = nodeType;
    this.tag = tag;
    this.props = { ...props };
    this.children = [];
  }

  addChildren(vNode) {
    this.children.push(vNode);
  }
}

export default VNode;