export default (url, path) => {
  const baseUrl = url.replace('/', '');
  const urlRegExp = new RegExp(`^\/${baseUrl}\/?$`);
  const replaceRegExp = new RegExp(`\/${baseUrl}\/?`);

  return path.match(urlRegExp) ? '/' : path.replace(replaceRegExp, '');
};
