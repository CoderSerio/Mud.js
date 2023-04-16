import Publisher from "./publisher.js";
class Viewer {
  constructor(mud, dataKey, updateHandler) {
    this.mud = mud;
    this.dataKey = dataKey;
    this.updateHandler = updateHandler;

    Publisher.viewer = this;
    this.oldValue = mud.data[dataKey];
    Publisher.viewer = null;
  }

  update() {
    const newValue = this.mud.data[this.dataKey];
    if (this.oldValue === newValue) {
      return;
    }
    this.updateHandler(newValue);
  }
}

export default Viewer;