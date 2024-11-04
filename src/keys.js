module.exports = {
    database: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT || 3306,
      database: process.env.DB_NAME,
    },
  };
  