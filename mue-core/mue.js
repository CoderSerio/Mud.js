import Hijacker from '../mue-core/hijacker.js';
import Compiler from '../mue-core/compiler/compiler.js';
class Mue {
  constructor(options) {
    // element的简写。作为项目挂载的根节点。
    this.el = document.querySelector(options.el);
    this.data = options.data;
    new Hijacker(this.data);
    new Compiler(this);
  }
}

export default Mue;