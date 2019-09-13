exports.seed = function(knex) {
  return knex("tasks")
    .truncate()
    .then(function() {
      return knex("tasks").insert([
        {
          description: "Search for software engineers",
          notes: "Limit to SF bay area",
          completed: true,
          project_id: 3
        },
        { description: "Print out resume", completed: false, project_id: 3 },
        { description: "Docker tutorial", completed: false, project_id: 1 },
        {
          description: "Schedule time with Henry",
          completed: false,
          project_id: 1
        },
        {
          description: "Figure out how to link domain to code",
          completed: false,
          project_id: 2
        },
        {
          description: "Ask for feedback from friends",
          completed: false,
          project_id: 2
        }
      ]);
    });
};
