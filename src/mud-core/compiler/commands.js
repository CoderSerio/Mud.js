import Viewer from "../viewer/viewer.js";
import { updateIfNodeList, restoreValue, batchUpdateComment } from "./utils.js";
import { useDataValue } from '../common/utils.js';

export const handleAttributeMustache = (mud, node, attribute) => {
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
    let [dataValue] = useDataValue(mud, dataKey);
    if (dataValue === undefined) {
      return;
    }
    else if(typeof dataValue === "object"){
      dataValue =  JSON.stringify(dataValue)
    }
   
    const handleUpdate = (newValue) => {
      node.textContent = text.replace(reg, newValue);
    };
    new Viewer(mud, dataKey, handleUpdate);
    handleUpdate(dataValue);
  }
};

export const handleFor = (mud, node, attribute) => {
  const { name, value } = attribute;
  if (name === 'for') {
    const [iterator, dataKey] = value.split(':').map(item => item?.trim());
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
  let ifNodeList = null;
  const oldList = [];
  if (name === "if") {
    ifNodeList = updateIfNodeList(node, name, value);
  } else {
    return;
  }
  const isCommentedMap = new Map();
  const handleIfUpdate = (ifNodeList) => {
    const len = ifNodeList.length;
    if (ifNodeList[len - 1].name !== "else") {
      for (let key = 0; key < len; key++) {
        const [ifValue] = useDataValue(mud, ifNodeList[key].value);
        const breakFlag = batchUpdateComment(ifValue, isCommentedMap, ifNodeList, oldList, key, key + 1);
        if (breakFlag) break;
      }
    } else {
      for (let key = 0; key < len; key++) {
        const [ifValue] = useDataValue(mud, ifNodeList[key].value);
        if (key === len - 1) {
          if (isCommentedMap.get(oldList[key])) {
            restoreValue(ifNodeList[key].node, oldList[key]);
            isCommentedMap.set(oldList[key], false);
          }
          break;
        } else {
          const breakFlag = batchUpdateComment(ifValue, isCommentedMap, ifNodeList, oldList, key, key + 1);
          if (breakFlag) break;
        }
      }
    }
  };
  ifNodeList.forEach((ifNode, index) => {
    new Viewer(
      mud,
      ifNodeList[index].value,
      handleIfUpdate,
      ifNodeList[index].node,
      ifNodeList,
      index
    );
  });
  handleIfUpdate(ifNodeList);
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