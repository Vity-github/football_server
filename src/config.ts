export default {
  port: 3000,
  secret: "form",
  database: {
    host: "localhost",
    port: 3306,
    database: "football_server_user",
    username: "root",
    password: "18395288910t",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
