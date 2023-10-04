const filterNullProperties = (obj) => {
  for (const key in obj) {
    if (obj[key] === null) {
      delete obj[key];
    }
  }
  return obj;
};
export default filterNullProperties;
