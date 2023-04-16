import Publisher from "./publisher.js";
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

export default Hijacker;