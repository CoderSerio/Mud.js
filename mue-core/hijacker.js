import Publisher from "./publisher.js";
// 数据劫持者
class Hijacker {
  constructor(data) {
    Object.keys(data).forEach((key) => {
      this.hijack(data, key);
    });
  }

  // 劫持数据。需要拿到该数据节点及其父级对象
  hijack(object, key) {
    // 利用闭包，产生一个不会销毁发布者
    const publisher = new Publisher();
    let value = object[key];
    if (!value) {
      return;
    } else if (typeof value === 'object') { // 递归，遍历树状数据;
      Object.keys(value).forEach((key) => {
        this.hijack(value, key);
      });
    } else { // value是叶子节点的情况；object则是其父级节点
      const that = this;
      Object.defineProperty(object, key, {
        enumerable: true,
        configurable: true,
        get() {
          if (Publisher.viewer) { // 这一步操作参考 viewer.js
            publisher.addViewer(Publisher.viewer);
          }
          return value;
        },
        set(newValue) {
          if (value === newValue) {
            return;
          }
          value = newValue;
          // 提防一首新的数据也是树形结构
          that.hijack(newValue);
          publisher.publish();
        }
      });
    }
  }
}

export default Hijacker;