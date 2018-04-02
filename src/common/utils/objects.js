export default function getDeep(obj, path, fallBack) {
  if (!path) {
    return fallBack;
  }
  const pathArray = path.split('.');
  if (!Array.isArray(pathArray)) {
    return fallBack;
  }
  return pathArray.reduce((curr, next) => {
    if (curr && typeof curr === 'object' && next in curr) {
      return curr[next];
    }
    return fallBack;
  }, obj);
}
