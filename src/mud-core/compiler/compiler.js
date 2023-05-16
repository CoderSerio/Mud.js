import {
  handleContentMustache,
  handleAttributeMustache,
  handleFor,
  handleIf,
  handleComponent
} from "./commands.js";
class Compiler {
  constructor(mud) {
    this.mud = mud;
    this.el = mud.el;
    this.compile(this.el);
  }

  compile(el) {
    const childNodes = el.childNodes;
    const childNodesList = Array.from(childNodes);

    childNodesList.forEach((node) => {
      if (node.nodeType === 1) {
        this.compileForElement(node);
      } else if (node.nodeType === 3) {
        this.compileForText(node);
      }
      if (node.childNodes.length) {
        this.compile(node);
      }
    });
  }

  compileForElement(node) {
    const allAttributes = Array.from(node.attributes);

    allAttributes.forEach((attribute) => {
      handleAttributeMustache(this.mud, node, attribute);
      handleFor(this.mud, node, attribute);
      handleIf(this.mud, node, attribute);
    });

    handleComponent(this.mud, node);
  }

  compileForText(node) {
    handleContentMustache(this.mud, node, node.textContent);
  }
}

export default Compiler;