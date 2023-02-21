const sessionToUserMap = new Map();

//setting key to cookie
const setUser = (id, user) => {
  sessionToUserMap.set(id, user);
};
//setting key from cookie
const getUser = (id, user) => {
  sessionToUserMap.get(id);
};
//export modules
module.exports = { getUser, setUser };
