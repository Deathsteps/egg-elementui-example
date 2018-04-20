'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  router.redirect('/', '/public/index.html', 302);
  router.redirect('/index.html', '/public/index.html', 302);
  router.get('/api/news', controller.news.list);
};
