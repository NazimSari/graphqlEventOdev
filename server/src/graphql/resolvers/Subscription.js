export const Subscription = {
  userCreated: {
    subscribe: (_, args, { pubSub }) => pubSub.subscribe("userCreated"),
  },
  userUpdated: {
    subscribe: (_, args, { pubSub }) => pubSub.subscribe("userUpdated"),
  },

  eventCreated: {
    subscribe: (_, args, { pubSub }) => pubSub.subscribe("eventCreated"),
  },
  participantAdded: {
    subscribe: (_, args, { pubSub }) => pubSub.subscribe("participantAdded"),
  },
};
