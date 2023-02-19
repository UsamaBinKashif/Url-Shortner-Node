const sessionToUserMap = new Map();

const setUser = (id, user) => {
  sessionToUserMap.set(id, user);
};
const getUser = (id, user) => {
  sessionToUserMap.get(id);
};

module.exports = { getUser, setUser };
