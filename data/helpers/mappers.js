module.exports = {
  cleanProject
};

function intToBoolean(int) {
  return Boolean(int);
  // int === 1 ? true : false;
  // !!int
}

function cleanProject(project) {
  const cleanedProject = {
    ...project,
    completed: intToBoolean(project.completed)
  };

  return cleanedProject;
}
