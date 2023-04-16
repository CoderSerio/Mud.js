import { handleMustache, handleMap } from "./commands.js";
// 模板编译者
class Compiler {
  constructor(mud) {
    this.mud = mud;
    this.el = mud.el;
    this.compile(this.el);
  }

  // 其实就是作为一个编译器来用
  compile(el) {
    const childNodes = el.childNodes; // 真实DOM伪数组
    const childNodesList = Array.from(childNodes); // 真实DOM真数组

    childNodesList.forEach((node,) => {
      if (node.nodeType === 1) { // 元素类型
        this.compileForElement(node);
      } else if (node.nodeType === 3) { // 文本类型
        this.compileForText(node);
      }

      // 如果还有子节点，递归获取下一层
      if (node.childNodes.length) {
        this.compile(node);
      }
    });
  }

  // 处理元素类型DOM
  compileForElement(node) {
    const allAttributes = Array.from(node.attributes);

    allAttributes.forEach((attribute) => {
      // 比如 key="{msg}", key就是attribute.name, {msg}就是attribute.value
      const { name: attKey, value: attValue } = attribute;
      handleMustache(this.mud, node, attValue, true); // 处理属性插值
      handleMap(this.mud, node, attribute); // 处理map循环渲染
    });
  }

  // 处理文本类型DOM
  compileForText(node) {
    handleMustache(this.mud, node, node.textContent);
  }
}

export default Compiler;