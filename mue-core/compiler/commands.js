import Viewer from "../viewer.js";

// 处理插值语法，即{xxx}
export const handleMustache = (mue, node, text, isElementAttribute) => {
  const reg = /\{(.+?)\}/;
  const matchRes = text.match(reg);
  if (matchRes) { // 如果存在 {xxx}
    const dataKey = matchRes[1];
    if (mue.data[dataKey] === 'undefined') {
      return;
    }
    // 根据是否为DOM上的属性判断该更新哪里
    const update = isElementAttribute ? (text) => {
      node.value = text;
    } : (text) => {
      node.textContent = text;
    };
    // 单向绑定 V=F1(M)
    new Viewer(mue, dataKey, update);
    if (isElementAttribute) {
      // 双向绑定 M=F2(V)
      node.addEventListener('input', () => {
        mue.data[dataKey] = node.value;
      });
    }
    // 刷新视图层
    const newText = text.replace(reg, mue.data[dataKey]);
    update(newText);
  }
};

// 处理map语法，即 map="i:arr", 也要处理其中的插值语法
export const handleMap = (mue, node, attribute) => {
  const { name, value } = attribute;

  if (name === 'map') {
    const [iterator, dataKey] = value.split(':');
    const data = mue.data[dataKey];
    const reg = new RegExp(`\{${iterator}\}`);
    const content = `${node.innerHTML}`;
    // 循环渲染，并处理其中的插值模板
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