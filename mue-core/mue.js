import Publisher from "./publisher";
class Mue {
  constructor(options) {
    // 作为项目挂载的根节点
    this.realDom = document.querySelector(options.el);
    this.data = options.data;
  }
}

export default Mue;