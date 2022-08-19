module.exports = ({ env }) => ({
    connection: {
      client: 'mysql',
      connection: {
        host: env('database_host'),
        port: env.int('database_port', 3306),
        database: env('DATABASE_NAME', 'db'),
        user: env('db_username'),
        password: env('db_password'),
        ssl: true, 
      },
      debug: false,
    },
});

   