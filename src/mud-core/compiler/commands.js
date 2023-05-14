import Viewer from "../viewer.js";
import { createCommentNode, useDataValue } from "./utils.js";

export const handleMustache = (mud, node, text, isElementAttribute) => {
  const reg = /\{(.+?)\}/;
  const matchRes = text.match(reg);
  if (matchRes) {
    const dataKey = matchRes[1];
    const [dataValue, setDataValue] = useDataValue(mud, dataKey);
    // const dataKey = dataKeys.length > 1 ? dataKeys : dataKeys[0];
    // const continuousKeys = dataKeys.reduce()

    if (!dataValue) {
      return dataValue;
    }
    const updateHandler = isElementAttribute ? (text) => {
      node.value = text;
    } : (text) => {
      node.textContent = text;
    };
    new Viewer(mud, dataKey, updateHandler);
    if (isElementAttribute) {
      node.addEventListener('input', () => {
        setDataValue(node.value);
        // mud.data[dataKey] = node.value;
      });
    }
    const newText = text.replace(reg, dataValue);
    updateHandler(newText);
  }
};

export const handleFor = (mud, node, attribute) => {
  const { name, value } = attribute;
  if (name === 'for') {
    const [iterator, dataKey] = value.split(':');
    const forValue = mud.data[dataKey];
    const reg = new RegExp(`\{${iterator}\}`);

    // const handleForUpdate = (forValue, node) => {
    const content = `${node.innerHTML}`;
    const allNewContent = forValue?.reduce((all, item) => {
      let newContent = content;
      const matchRes = content.match(reg);
      if (matchRes) {
        newContent = content.replace(reg, item);
      }
      return all + newContent;
    }, '');
    node.innerHTML = allNewContent;
    // };

    // new Viewer(mud, dataKey, handleForUpdate, node);
    // handleForUpdate(forValue, node);
  }
};

export const handleIf = (mud, node, attribute) => {
  const { name, value } = attribute;
  if (name === 'm-if') {
    const ifValue = mud.data[value];
    let newNode = null;
    const updateHandler = (ifValue, node) => {
      if (ifValue) {
        newNode ? newNode.parentNode.replaceChild(node, newNode) : "";
      }
      else {
        newNode = createCommentNode(node);
      }
    };
    new Viewer(mud, value, updateHandler, node);
    updateHandler(ifValue, node);
  }
};
