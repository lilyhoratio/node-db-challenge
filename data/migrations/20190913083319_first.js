exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments(); // pk
      tbl.string("name", 128).notNullable();
      tbl.string("description", 500);
      tbl
        .boolean("completed")
        .defaultTo(false)
        .notNullable();
    })

    .createTable("resources", tbl => {
      tbl.increments(); // pk
      tbl
        .string("name", 128)
        .unique()
        .notNullable();
      tbl.string("description", 500);
    })

    .createTable("project_resources", tbl => {
      tbl.increments();

      // fk - points to projects table
      tbl
        .integer("project_id")
        .unsigned() // must be positive
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE") // if the PK record is deleted
        .onUpdate("CASCADE"); // if the PK value updates

      // fk - points to resources table
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })

    .createTable("tasks", tbl => {
      tbl.increments(); // pk
      tbl.string("description", 128).notNullable();
      tbl.string("notes", 500);
      tbl
        .boolean("completed")
        .defaultTo(false)
        .notNullable();

      // fk - points to projects
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  // drop in opposite order of creation
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
