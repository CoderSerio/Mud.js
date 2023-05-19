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