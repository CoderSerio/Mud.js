import Viewer from "../viewer.js";

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

export const handleMap = (mud, node, attribute) => {
  const { name, value } = attribute;

  if (name === 'map') {
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