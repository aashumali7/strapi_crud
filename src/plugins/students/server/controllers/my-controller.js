'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('students')
      .service('myService')
      .getWelcomeMessage();
  },
});
