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
        const objValue = Reflect.get(obj, key, proxy);
        if (Publisher.viewer) {
          that.publisher.addViewer(Publisher.viewer);
        }
        if (isObject(objValue)) {
          const hijackedValue = that.obj2Proxy.get(objValue);
          if (hijackedValue) {
            return hijackedValue;
          } else {
            const hijackedValue = that.hijack(objValue);
            that.obj2Proxy.set(objValue, hijackedValue);
          }
        }
        return objValue;
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