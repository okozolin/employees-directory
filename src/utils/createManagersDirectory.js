export function createManagersDirectory(users) {
  const directory = {};

  // iterate over each user object
  for (const user of users) {
    // add the current user to the directory
    directory[user.id] = user;

    // add a new property to the current user called "managed_employees"
    user.managed_employees = [];

    // iterate over each user object to find the users managed by the current user
    for (const managedEmployee of users) {
      if (managedEmployee?.manager_id === user.id) {
        // add the id of the managed user to the "managed_employees" array
        user.managed_employees.push(managedEmployee.id);
      }
    }
  }

  return directory;
}