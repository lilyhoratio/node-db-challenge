module.exports = {
  cleanResource
};

function intToBoolean(int) {
  return Boolean(int);
  // int === 1 ? true : false;
  // !!int
}

function cleanResource(resource) {
  console.log(resource);
  const cleanedResource = {
    ...resource,
    completed: intToBoolean(resource.completed)
  };

  return cleanedResource;
}
