import Publisher from "../publisher.js";
import { isChanged } from "./utils.js";
class Viewer {
  constructor(mud, dataKey, updateHandler, node) {
    this.mud = mud;
    this.dataKey = dataKey;
    this.updateHandler = updateHandler;
    this.node = node;

    Publisher.viewer = this;
    this.oldValue = mud.data[dataKey];
    Publisher.viewer = null;
  }

  update() {
    const newValue = this.mud.data[this.dataKey];
    if (!isChanged(this.oldValue, newValue)) {
      return;
    }
    this.oldValue = newValue;
    if (this.node) {
      this.updateHandler(newValue, this.node);
    } else {
      this.updateHandler(newValue);
    }
  }
}

export default Viewer;