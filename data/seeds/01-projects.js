exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate() // change from .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Learn Docker",
          description: "Install Docker and learn it to avoid Postgres hell."
        },
        { name: "Polish portfolio", description: "HTML/CSS scaffolding." },
        {
          name: "Reach out to 5 software engineers",
          description: "Informational interviews."
        }
      ]);
    });
};
