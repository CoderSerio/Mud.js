import Publisher from "./publisher.js";
import {addifNodeList} from "./compiler/utils.js"
class Viewer {
  constructor(mud, dataKey, updateHandler, node,ifNodeList,num) {
    this.mud = mud;
    this.dataKey = dataKey;
    this.updateHandler = updateHandler;
    this.node = node;
    this.ifNodeList = ifNodeList
    this.num = num
    Publisher.viewer = this;
    this.oldValue = mud.data[dataKey];
    Publisher.viewer = null;
  }

  update() {
    const newValue = this.mud.data[this.dataKey];
    if (this.oldValue === newValue) {
      return;
    }
    //更新数据
    this.oldValue = newValue;
    let datakey = this.dataKey
    this.ifNodeList[this.num].datakey= newValue
    if (this.node)
      this.updateHandler(this.ifNodeList);
    else
      this.updateHandler(newValue);
  }
}

export default Viewer;