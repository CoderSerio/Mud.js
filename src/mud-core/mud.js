import Hijacker from './hijacker/hijacker.js';
import Compiler from './compiler/compiler.js';
import Viewer from './viewer/viewer.js';
class Mud {
  constructor(options) {
    window.mud = this;
    this.el = document.querySelector(options.el);
    this.data = options.data;
    this.components = options.components;
    this.watch = (dataKey, updateHandler) => {
      new Viewer(this, dataKey, updateHandler);
    };
    new Hijacker(this);
    new Compiler(this);
  }
}

export default Mud;