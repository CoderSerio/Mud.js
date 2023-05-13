import Publisher from "./publisher.js";

class Hijacker {

  constructor(mud) {
    this.publisher = new Publisher();
    this.obj2Proxy = new WeakMap();
    mud.data = this.hijack(mud.data);
  }

  hijack(data) {
    const that = this;

    if (!(data !== null && typeof data === 'object')) {
      return data;
    }

    const hijackedData = new Proxy(data, {
      get(obj, key, proxy) {
        const res = Reflect.get(obj, key, proxy);
        if (Publisher.viewer) {
          that.publisher.addViewer(Publisher.viewer);
        }
        // const hijackedData = that.obj2Proxy.get(data);
        // if (hijackedData) {
        // return hijackedData;
        // } else {
        return that.hijack(res);
        // }
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

    this.obj2Proxy.set(data, hijackedData);
    return hijackedData;
  };
}

export default Hijacker;