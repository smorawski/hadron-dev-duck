export default (method, data, groups, schema) => {
  return Promise.all(data.map((result) => method(result, groups, schema)));
}
