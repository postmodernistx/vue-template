const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: true,
  productionSourceMap: false,
});
