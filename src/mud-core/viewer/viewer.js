import Publisher from "../publisher/publisher.js";
import { isChanged } from "./utils.js";
import { useDataValue, clone } from "../common/utils.js";
class Viewer {
  constructor(mud, dataKey, updateHandler, node,ifNodeList,num) {
    this.mud = mud;
    this.dataKey = dataKey;
    this.updateHandler = updateHandler;
    this.node = node;
    this.ifNodeList = ifNodeList
    this.num = num

    Publisher.viewer = this;
    this.oldValue = clone(useDataValue(mud, dataKey)[0]);
    Publisher.viewer = null;
  }

  update() {
    const newValue = useDataValue(this.mud, this.dataKey)[0];
    if (!isChanged(this.oldValue, newValue)) {
      return;
    }
    if(this.ifNodeList){
    this.oldValue = newValue;
    let datakey = this.dataKey
    this.ifNodeList[this.num].datakey= newValue
    }
    //针对if节点列表的处理
    if (this.node)
    this.updateHandler(this.ifNodeList);
    else{
      this.oldValue = clone(newValue);
      this.updateHandler(newValue, this.node);
    }
   
  }
}

export default Viewer;