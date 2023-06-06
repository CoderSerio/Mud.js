import Viewer from "../viewer/viewer.js";
import { createCommentNode,addifNodeList,returnNode } from "./utils.js";
import { useDataValue } from '../common/utils.js';
export const handleAttributeMustache = (mud, node,attribute) => {
  const { name: attKey, value: attValue } = attribute;
  if (attKey === 'props') {
    return;
  }
  const reg = /\{(.+?)\}/;
  const matchRes = attValue?.match(reg);

  if (matchRes) {
    const dataKey = matchRes[1];
    const [dataValue, setDataValue] = useDataValue(mud, dataKey);
    if (dataValue === undefined) {
      return;
    }
    const handleUpdate = (text) => {
      node[attKey] = text;
    };
    new Viewer(mud, dataKey, handleUpdate);
    node.addEventListener('input', () => {
      setDataValue(node.value);
    });
    const newText = attValue.replace(reg, dataValue);
    handleUpdate(newText);
  }
};

export const handleContentMustache = (mud, node, text) => {
  const reg = /\{(.+?)\}/;
  const matchRes = text.match(reg);
  if (matchRes) {
    const dataKey = matchRes[1];
    const [dataValue] = useDataValue(mud, dataKey);
    if (dataValue === undefined) {
      return;
    }
    const handleUpdate = (newValue) => {
    node.textContent = text.replace(reg, newValue);
  }
  new Viewer(mud, dataKey, handleUpdate);
  handleUpdate(dataValue);
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
};
export const handleComponent = (mud, node) => {
  const componentName = node.tagName?.toLowerCase();
  const url = mud?.components?.[componentName];
  if (!url) {
    return;
  }

  const iframe = document.createElement('iframe');

  const handleIframeUpdate = () => {
    const iDocument = iframe.contentDocument;
    iframe.width = iDocument?.body?.offsetWidth || 0;
    iframe.height = iDocument?.body?.scrollHeight || 0;
  };

  const reg = /\{(.+?)\}/;
  const props = node.attributes?.props?.nodeValue;
  const matchRes = props?.match(reg);

  iframe.height = 0;
  iframe.scrolling = 'no';
  iframe.style.width = '100%';
  iframe.style.border = 'none';
  iframe.src = url;
  iframe.onload = () => {
    const iDocument = iframe.contentDocument;
    const iWindow = iframe.contentWindow;

    if (matchRes) {
      matchRes[1].split(',')?.forEach((pair) => {
        const pairArr = pair.trim().split(':');
        const dataNewName = pairArr[0];
        const dataKey = pairArr[1] ?? dataNewName;
        const [dataValue, setDataValue] = useDataValue(mud, dataKey);

        iWindow.mud.data[dataNewName] = dataValue;
        // mud.data?.[dataKey];
        new Viewer(mud, dataKey, (newValue) => {
          iWindow.mud.data[dataNewName] = newValue;
        });
        iWindow.mud.watch(dataNewName, (newValue) => {
          setDataValue(newValue);
        });
      });
    }

    iDocument.head.innerHTML = `
      <META HTTP-EQUIV="pragma" CONTENT="no-cache">
      <META HTTP-EQUIV="Cache-Control" CONTENT="no-cache, must-revalidate">
      <META HTTP-EQUIV="expires" CONTENT="0">
    `;
    iDocument.body.style.margin = 0;
    iDocument.body.addEventListener("DOMSubtreeModified", () => {
      handleIframeUpdate();
    }, false);
    handleIframeUpdate();
  };
  node.appendChild(iframe);

};