    // path: ./config/env/production/server.js

    module.exports = ({ env }) => ({
      host: env('APP_HOST', '0.0.0.0'),
      port: env.int('PORT', 1337),
    });
