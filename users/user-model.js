const db = require("../data/db-config");

module.exports = {
  find,
  findBy,
  findById,
  add,
  remove,
  update
};

//find all users
function find(department) {
  const query = db("users").select("id", "username", "department");

  if (department) {
    query.where({ department });
  }
  return query;
}

//find user with filter
function findBy(filter) {
  return db("users").where(filter);
}

//find users by ID; where returns an array; return null if no users in db
function findById(id) {
  return db("users")
    .where({ id })
    .first()
    .then(user => {
      if (user) {
        return user;
      } else {
        return null;
      }
    });
}

//add new user
function add(user) {
  return db("users")
    .insert(user)
    .then(id => {
      return findById(id[0]);
    });
}

//update user
function update(changes, id) {
  return db("users")
    .where({ id })
    .update(changes);
}

//delete user
function remove(id) {
  return db("users")
    .where({ id })
    .del();
}
