// mergeUsers.js

// Function to merge multiple arrays using spread operator
function mergeUserArrays(...arrays) {
  const mergedUsers = [].concat(...arrays);

  return {
    users: mergedUsers,
    mergedAt: new Date().toISOString()
  };
}

// export the function
module.exports = mergeUserArrays;