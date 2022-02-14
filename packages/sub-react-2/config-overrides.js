const { name } = require("./package.json");

module.exports = {
  webpack: function override(config, env) {
    config.output.library = `${name}_[name]`;
    config.output.libraryTarget = "umd";
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
    return config;
  },
  devServer: (configFunction) => {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.open = false;
      config.headers = { "Access-Control-Allow-Origin": "*" };
      return config;
    };
  },
};
