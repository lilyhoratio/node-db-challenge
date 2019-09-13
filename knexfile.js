// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/dev.sqlite3"
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after connection is made to the sqlite engine
        conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement - cannot add FK to table if it doesn't exist as PK
        // e.g. cannot enter invalid project_id (that doesn't exist) in project_resources table
      }
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
