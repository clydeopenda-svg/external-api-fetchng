// index.js

const mergeUserArrays = require("./mergeUsers");

// Example arrays (simulate two companies merging)
const companyAUsers = ["alice", "bob", "charlie"];
const companyBUsers = ["diana", "edward"];
const companyCUsers = ["faith", "george"];

// Call the function
const result = mergeUserArrays(
  companyAUsers,
  companyBUsers,
  companyCUsers
);

// Output result
console.log(result);