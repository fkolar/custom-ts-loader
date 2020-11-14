const utils = require('loader-utils');

module.exports = function (source) {
  const options = utils.getOptions(this);
  // console.log('options ', options);
  const sourceFileName = this.resourcePath;
  const cb = this.async();
  const plugin = this._compilation._ngToolsWebpackPluginInstance;
  if (!plugin) {
    throw new Error('The AngularCompilerPlugin was not found. '
      + 'The @ngtools/webpack loader requires the plugin.');
  }

  plugin.done
    .then(() => {
        const result = plugin.getCompiledFile(sourceFileName);


        if (sourceFileName.endsWith('.ts') && source.indexOf('@Rule') > -1) {
          console.log('\n\nMY Loader = >', result.outputText);
          const out = result.outputText.replace('name: \'ssss\'', 'name: \'ssss--modified\'');
          cb(null, out, result.sourceMap);

        } else {
          cb(null, result.outputText, result.sourceMap);
        }
      }
    ).catch(err => {
    cb(err);
  });
};
