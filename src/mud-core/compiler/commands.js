import Viewer from "../viewer/viewer.js";
import { createCommentNode, useDataValue } from "./utils.js";

export const handleMustache = (mud, node, text, isElementAttribute) => {
  const reg = /\{(.+?)\}/;
  const matchRes = text.match(reg);
  if (matchRes) {
    const dataKey = matchRes[1];
    const [dataValue, setDataValue] = useDataValue(mud, dataKey);

    if (!dataValue) {
      return dataValue;
    }
    const handleUpdate = isElementAttribute ? (text) => {
      node.value = text;
    } : (text) => {
      node.textContent = text;
    };
    new Viewer(mud, dataKey, handleUpdate);
    if (isElementAttribute) {
      node.addEventListener('input', () => {
        setDataValue(node.value);
      });
    }
    const newText = text.replace(reg, dataValue);
    handleUpdate(newText);
  }
};

export const handleFor = (mud, node, attribute) => {
  const { name, value } = attribute;
  if (name === 'for') {
    const [iterator, dataKey] = value.split(':');
    const forValue = mud.data[dataKey];
    const reg = new RegExp(`\{${iterator}\}`);
    const content = `${node.innerHTML}`;

    const handleUpdate = (forValue, node) => {
      const allNewContent = forValue?.reduce((all, item) => {
        let newContent = content;
        const matchRes = content.match(reg);
        if (matchRes) {
          newContent = content.replace(reg, item);
        }
        return all + newContent;
      }, '');
      node.innerHTML = allNewContent;
    };

    new Viewer(mud, dataKey, handleUpdate, node);
    handleUpdate(forValue, node);
  }
};

export const handleIf = (mud, node, attribute) => {
  const { name, value } = attribute;
  if (name === 'm-if') {
    const ifValue = mud.data[value];
    let newNode = null;
    const handleUpdate = (ifValue, node) => {
      if (ifValue) {
        newNode ? newNode.parentNode.replaceChild(node, newNode) : "";
      }
      else {
        newNode = createCommentNode(node);
      }
    };
    new Viewer(mud, value, handleUpdate, node);
    handleUpdate(ifValue, node);
  }
};
