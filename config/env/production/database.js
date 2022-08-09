module.exports = ({ env }) => ({
    connection: {
      client: 'mysql',
      connection: {
        host: env('DATABASE_HOST'),
        user: env('dbusername'),
        password: env('password'),
        ssl: (true),
      },
    },
});

   