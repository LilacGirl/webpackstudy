var path = require('path');

module.exports = {
  contentBase: path.resolve(__dirname, '../dist'),
  host: 'my.webpack',
  port: 8089, // 默认8001
  inline: true, // 可以监控js变化
  hot: true, // 热启动
  compress: true,
  watchContentBase: false
};
