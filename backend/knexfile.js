// Update with your config settings.

module.exports = {
  client: "postgresql",
  connection: {
    database: "knowledge",
    user: "admin",
    password: "password",
  },
  pool: {
    min: 2,
    max: 20,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
