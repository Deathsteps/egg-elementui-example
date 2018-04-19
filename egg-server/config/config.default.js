'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1523930361465_2609';

  // add your config here
  config.middleware = [];

  config.security = {
    domainWhiteList: [ 'localhost:8080' ],
  };

  config.news = {
    pageSize: 5,
    serverUrl: 'https://cnodejs.org/api/v1',
  };

  return config;
};
