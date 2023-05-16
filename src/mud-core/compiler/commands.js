import Viewer from "../viewer/viewer.js";
import { createCommentNode, useDataValue } from "./utils.js";

export const handleAttributeMustache = (mud, node, attribute, isElementAttribute) => {
  const text = attribute.value;
  const { name: attKey, value: attValue } = attribute;
  const reg = /\{(.+?)\}/;
  const matchRes = attValue?.match(reg);
  if (matchRes) {
    const dataKey = matchRes[1];
    const [dataValue, setDataValue] = useDataValue(mud, dataKey);

    if (!dataValue) {
      return dataValue;
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

    if (!dataValue) {
      return dataValue;
    }
    const handleUpdate = (text) => {
      node.textContent = text;
    };
    new Viewer(mud, dataKey, handleUpdate);

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

export const handleComponent = (mud, node, callback) => {
  const componentName = node.tagName?.toLowerCase();
  const url = mud?.components?.[componentName];
  if (!url) {
    return;
  }


  const iframe = document.createElement('iframe');
  const updateHandler = () => {
    const iDocument = iframe.contentDocument;
    iframe.width = iDocument?.body?.offsetWidth ?? 0;
    iframe.height = iDocument?.body?.scrollHeight ?? 0;
  };
  iframe.height = 0;
  iframe.scrolling = 'no';
  iframe.style.width = '100%';
  iframe.style.border = 'none';
  iframe.src = url;
  iframe.onload = () => {
    const iDocument = iframe.contentDocument;
    iDocument.head.innerHTML = `
      <META HTTP-EQUIV="pragma" CONTENT="no-cache">
      <META HTTP-EQUIV="Cache-Control" CONTENT="no-cache, must-revalidate">
      <META HTTP-EQUIV="expires" CONTENT="0">
    `;
    iDocument.body.style.margin = 0;
    iDocument.body.addEventListener("DOMSubtreeModified", function () {
      updateHandler();
    }, false);
    updateHandler();
  };
  node.appendChild(iframe);
};