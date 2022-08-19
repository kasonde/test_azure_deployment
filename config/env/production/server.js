    // path: ./config/env/production/server.js

    module.exports = ({ env }) => ({
      host: env("HOST", "0.0.0.0"),
      port: env.int("PORT", 1337),
      url: "https://my-strapi-app-app.azurewebsites.net",
      admin: {
        url: "https://brave-bay-04250540f.1.azurestaticapps.net",
        serveAdminPanel: false,
      },
    });