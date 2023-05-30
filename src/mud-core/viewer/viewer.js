import Publisher from "../publisher/publisher.js";
import { isChanged } from "./utils.js";
import { useDataValue, clone } from "../common/utils.js";
class Viewer {
  constructor(mud, dataKey, updateHandler, node) {
    this.mud = mud;
    this.dataKey = dataKey;
    this.updateHandler = updateHandler;
    this.node = node;

    Publisher.viewer = this;
    this.oldValue = clone(useDataValue(mud, dataKey)[0]);
    Publisher.viewer = null;
  }

  update() {
    const newValue = useDataValue(this.mud, this.dataKey)[0];
    if (!isChanged(this.oldValue, newValue)) {
      return;
    }
    this.oldValue = clone(newValue);
    this.updateHandler(newValue, this.node);
  }
}

export default Viewer;