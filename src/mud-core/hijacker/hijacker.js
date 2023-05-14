import Publisher from "../publisher.js";
import { isObject } from "./utils.js";

class Hijacker {

  constructor(mud) {
    this.publisher = new Publisher();
    this.obj2Proxy = new WeakMap();
    mud.data = this.hijack(mud.data);
  }

  hijack(data) {
    const that = this;

    if (!isObject(data)) {
      return data;
    }

    return new Proxy(data, {
      get(obj, key, proxy) {
        const value = Reflect.get(obj, key, proxy);
        if (Publisher.viewer) {
          that.publisher.addViewer(Publisher.viewer);
        }
        if (isObject(value)) {
          const hijackedValue = that.obj2Proxy.get(value);
          if (hijackedValue) {
            return hijackedValue;
          } else {
            const hijackedValue = that.hijack(value);
            that.obj2Proxy.set(value, hijackedValue);
          }
        }
        return value;
      },
      set(obj, key, newValue, proxy) {
        const res = Reflect.set(obj, key, newValue, proxy);
        that.publisher.publish();
        return res;
      },
      deleteProperty(obj, key) {
        const res = Reflect.deleteProperty(obj, key);
        that.publisher.publish();
        return res;
      }
    });
  };
}

export default Hijacker;