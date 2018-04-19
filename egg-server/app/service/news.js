'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async list(page = 1) {
    // read config
    const { serverUrl, pageSize } = this.config.news;

    try {
      // cnodejs topics, cannot connect to hacknews
      const { data: newsList } = await this.ctx.curl(
        `${serverUrl}/topics`,
        { data: { page, limit: pageSize }, dataType: 'json' }
      );
      return newsList;
    } catch (error) {
      return error;
    }
  }
}

module.exports = NewsService;
