'use strict';

// 发布者
class Publisher {
  constructor() {
    this.viewers = [];
  }

  addViewer(viewer) {
    this.viewers.push(viewer);
  }

  publish() {
    this.viewers.forEach((viewer) => {
      viewer.update();
    });
  }
}

class Hijacker {
  constructor(data) {
    Object.keys(data).forEach((key) => {
      this.hijack(data, key);
    });
  }

  hijack(object, key) {
    const publisher = new Publisher();
    let value = object[key];
    if (!value) {
      return;
    } else if (typeof value === 'object') {
      Object.keys(value).forEach((key) => {
        this.hijack(value, key);
      });
    } else {
      const that = this;
      Object.defineProperty(object, key, {
        enumerable: true,
        configurable: true,
        get() {
          if (Publisher.viewer) {
            publisher.addViewer(Publisher.viewer);
          }
          return value;
        },
        set(newValue) {
          if (value === newValue) {
            return;
          }
          value = newValue;
          that.hijack(newValue);
          publisher.publish();
        }
      });
    }
  }
}

class Viewer {
  constructor(mud, dataKey, updateHandler) {
    this.mud = mud;
    this.dataKey = dataKey;
    this.updateHandler = updateHandler;

    Publisher.viewer = this;
    this.oldValue = mud.data[dataKey];
    Publisher.viewer = null;
  }

  update() {
    const newValue = this.mud.data[this.dataKey];
    if (this.oldValue === newValue) {
      return;
    }
    this.updateHandler(newValue);
  }
}

const handleMustache = (mud, node, text, isElementAttribute) => {
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

const handleMap = (mud, node, attribute) => {
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

class Compiler {
  constructor(mud) {
    this.mud = mud;
    this.el = mud.el;
    this.compile(this.el);
  }

  compile(el) {
    const childNodes = el.childNodes;
    const childNodesList = Array.from(childNodes);

    childNodesList.forEach((node,) => {
      if (node.nodeType === 1) {
        this.compileForElement(node);
      } else if (node.nodeType === 3) {
        this.compileForText(node);
      }
      if (node.childNodes.length) {
        this.compile(node);
      }
    });
  }

  compileForElement(node) {
    const allAttributes = Array.from(node.attributes);

    allAttributes.forEach((attribute) => {
      const { name: attKey, value: attValue } = attribute;
      handleMustache(this.mud, node, attValue, true);
      handleMap(this.mud, node, attribute);
    });
  }

  compileForText(node) {
    handleMustache(this.mud, node, node.textContent);
  }
}

class Mud {
  constructor(options) {
    this.el = document.querySelector(options.el);
    this.data = options.data;
    new Hijacker(this.data);
    new Compiler(this);
  }
}

var index = { Mud };

module.exports = index;

if(typeof window !== 'undefined') {
  window.MUD_VERSION = '1.0.0'
}
