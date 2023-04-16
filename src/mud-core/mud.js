import Hijacker from '../mud-core/hijacker.js';
import Compiler from '../mud-core/compiler/compiler.js';
class Mud {
  constructor(options) {
    this.el = document.querySelector(options.el);
    this.data = options.data;
    new Hijacker(this.data);
    new Compiler(this);
  }
}

export default Mud;