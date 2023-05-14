export const isChanged = (oldValue, newValue) => {
  const oldType = typeof oldValue;
  const newType = typeof newValue;

  if (oldType !== newType) {
    return true;
  }

  if (['function', 'object'].includes(oldType)) {
    return oldValue.toString() !== newValue.toString();
  }

  return oldValue !== newValue;
};