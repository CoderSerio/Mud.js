import Hijacker from './hijacker/hijacker.js';
import Compiler from './compiler/compiler.js';
class Mud {
  constructor(options) {
    const el = document.querySelector(options.el);
    el.mud = this;
    this.el = el;
    this.data = options.data;
    this.components = options.components;
    // this.props = options.props

    new Hijacker(this);
    new Compiler(this);
  }
}

export default Mud;