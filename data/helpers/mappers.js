module.exports = {
  cleanProject
};

function intToBoolean(int) {
  return Boolean(int);
  //   int === 1 ? true : false;
  // Boolean(int)
  // !!int
}

function cleanProject(project) {
  const cleanedProject = {
    ...project,
    completed: intToBoolean(project.completed)
  };
  console.log("cleaned project", cleanedProject);
  //   return { ...project, completed: intToBoolean(project.completed) };
  return cleanedProject;
}
