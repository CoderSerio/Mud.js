import Viewer from "../viewer.js";
import Publisher from "../publisher.js";
import { createCommentNode,addifNodeList,returnNode } from "./utils.js";
export const handleMustache = (mud, node, text, isElementAttribute) => {
  const reg = /\{(.+?)\}/;
  const matchRes = text.match(reg);
  if (matchRes) { // 如果存在 {xxx}
    const dataKey = matchRes[1];
    if (mud.data[dataKey] === 'undefined') {
      return;
    }
    const update = isElementAttribute ? (text) => {
      node.value = text;
    } : (text) => {
      node.textContent = text;
    };
    new Viewer(mud, dataKey, update);
    if (isElementAttribute) {
      node.addEventListener('input', () => {
        mud.data[dataKey] = node.value;
      });
    }
    const newText = text.replace(reg, mud.data[dataKey]);
    update(newText);
  }
};

export const handleFor = (mud, node, attribute) => {
  const { name, value } = attribute;
  if (name === 'for') {
    const [iterator, dataKey] = value.split(':');
    const data = mud.data[dataKey];
    const reg = new RegExp(`\{${iterator}\}`);
    const content = `${node.innerHTML}`;
    const allNewContent = data?.reduce((all, item) => {
      let newContent = content;
      const matchRes = content.match(reg);
      if (matchRes) {
        newContent = content.replace(reg, item);
      }
      return all + newContent;
    }, '');
    node.innerHTML = allNewContent;
  }
};
export const handleIf = (mud, node, attribute) => {
  const { name, value } = attribute;
  let ifNodeList = null
  if(name==="if"){
    ifNodeList = addifNodeList(node,name,value)
    //获取实际的逻辑列表
  }else{
    return
  }
  let myMap = new Map();
  const handleIfUpdate = (ifNodeList) => {
    let num = ifNodeList.length;
    if(ifNodeList[num-1].name!="else"){
      console.log("wuelse")
    }else{
      for (let key = 0 ;key<num;key++) {
        const ifValue = mud.data[ifNodeList[key].value];
        //ifValue为每一项的值
        if(key===0){
          //判断if
          if (ifValue) {
            if(myMap.get(oldList[key])){
              returnNode(ifNodeList[key].node,oldList[key])
              myMap.set(oldList[key],false)
             //恢复为原值并修改记录表状态
            }
            //判断自己是否被注释，如果是则显示
            for(let i =1 ;i<num;i++){
              oldList[i] = createCommentNode(ifNodeList[i].node,oldList[i])
              myMap.set(oldList[i],true)
            }
            break;
            //其余全部注释
          }
          else {
            oldList[key] =createCommentNode(ifNodeList[key].node,oldList[key]);
            myMap.set(oldList[key],true)
            //注释自己
          }
        }
        else if(key===num-1){
          if(myMap.get(oldList[key])){
            returnNode(ifNodeList[key].node,oldList[key])
            myMap.set(oldList[key],false)
          }
          //判断else
          break;
        }
        else{
          if (ifValue) {
            if(myMap.get(oldList[key])){
              returnNode(ifNodeList[key].node,oldList[key])
              myMap.set(oldList[key],false)
              console.log("其他恢复")
            }
           
            for(let i=key+1;i<num;i++){
              // createCommentNode(ifNodeList[i].node)
              oldList[i] = createCommentNode(ifNodeList[i].node,oldList[i])
              myMap.set(oldList[i],true)
            }
            break;
            //其余全部注释
          }
          else {
            oldList[key] =createCommentNode(ifNodeList[key].node,oldList[key]);
            myMap.set(oldList[key],true)
            // createCommentNode(ifNodeList[key].node);
            //注释自己
          }
        }
        
      }

    }
  }
  // new Viewer(mud, value, handleIfUpdate1, node);
  for(let i = 0;i<ifNodeList.length;i++){
    new Viewer(mud, ifNodeList[i].value, handleIfUpdate, ifNodeList[i].node,ifNodeList,i);
  }
  let oldList = Array(ifNodeList.length)
  handleIfUpdate(ifNodeList)







    // const ifValue = mud.data[value];
    // let newNode = null;
    // const handleIfUpdate = (ifValue, node) => {

    //   // debugger;
    //   if (ifValue) {
    //     newNode ? newNode.parentNode.replaceChild(node, newNode) : "";
    //   }
    //   else {
    //     newNode = createCommentNode(node);
    //   }
    // };
    
    // handleIfUpdate(ifValue, node);


};
