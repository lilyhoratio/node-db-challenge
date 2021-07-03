exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        {
          name: "LinkedIn",
          description: "InMail feature to request meeting up"
        },
        { name: "Henry", description: "Docker Duke" },
        { name: "Namecheap domain" },
        { name: "Docker" }
      ]);
    });
};
