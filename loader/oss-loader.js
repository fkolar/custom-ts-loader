const utils = require('loader-utils');

module.exports = function (source) {
  const options = utils.getOptions(this);
  // console.log('options ', options);

  // let newsrc = '/** MetaUI **/ ' + source;
  // console.log('newsrc ', source);
  console.log('path ', this.resourcePath);

  return source;
};
