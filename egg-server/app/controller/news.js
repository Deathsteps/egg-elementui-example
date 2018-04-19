'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    // TODO: egg-validate
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    try {
      this.ctx.body = await ctx.service.news.list(page);
    } catch (error) {
      this.ctx.body = error;
    }
  }
}

module.exports = NewsController;
