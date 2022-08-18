module.exports = ({ env }) => ({
    connection: {
      client: 'mysql',
      connection: {
        host: env('database_host'),
        user: env('db_username'),
        password: env('db_password'),
        ssl: (true),
      },
    },
});

   