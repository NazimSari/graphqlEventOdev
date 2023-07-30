export const Event = {
  user: (parent, _, { db }) =>
    db.users.find((user) => user.id === parent.user_id),
  location: (parent, __, { db }) =>
    db.locations.find((location) => location.id === parent.location_id),
  participant: (parent, __, { db }) =>
    db.participants.filter((participant) => participant.id === parent.user_id),
};
