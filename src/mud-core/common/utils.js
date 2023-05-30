export const useDataValue = (mud, keyStr) => {
  const keys = keyStr.split('.');

  if (keys.length > 1) {
    const key = keys.pop();
    const data = keys.reduce((all, item) => {
      return all[item];
    }, mud.data);
    return [data[key], (newValue) => {
      data[key] = newValue;
    }];
  } else {
    const key = keys[0];
    const data = mud.data;
    return [data[key], (newValue) => {
      data[key] = newValue;
    }];
  }
};

export const clone = (value) => {
  const type = typeof value;
  if (type === 'object') {
    if (Array.isArray(value)) {
      return Array.from(value);
    } else {
      const obj = {};
      Object.keys(value)?.forEach((key) => {
        obj[key] = clone(obj[key]);
      });
      return obj;
    }
  }
  return value;
};