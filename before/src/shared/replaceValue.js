exports.replaceValue = (oldObject, newObject) => {
  Object.assign(oldObject, newObject);
  return oldObject;
};
