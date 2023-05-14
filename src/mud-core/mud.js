import Hijacker from './hijacker/hijacker.js';
import Compiler from './compiler/compiler.js';
class Mud {
  constructor(options) {
    this.el = document.querySelector(options.el);
    this.data = options.data;
    new Hijacker(this);
    new Compiler(this);
  }
}

export default Mud;