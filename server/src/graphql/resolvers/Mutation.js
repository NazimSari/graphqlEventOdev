// const { nanoid } = require("nanoid");
import { nanoid } from "nanoid";

export const Mutation = {
  createUser: (parent, { data }, { pubSub, db }) => {
    const user = {
      id: nanoid(),
      username: data.username,
      email: data.email,
    };
    db.users.push(user);
    pubSub.publish("userCreated", { userCreated: user });
    return user;
  },
  updateUser: (parent, { id, data }, { pubSub, db }) => {
    const user_index = db.users.findIndex((user) => user.id === id);
    if (user_index === -1) {
      throw new Error("User not found.");
    }
    const updated_user = (users[user_index] = {
      ...db.users[user_index],
      ...data,
    });
    pubSub.publish("userUpdated", { userUpdated: updated_user });
    return updated_user;
  },
  deleteUser: (parent, { id }, { pubSub, db }) => {
    const user_index = db.users.findIndex((user) => user.id === id);
    if (user_index === -1) {
      throw new Error("User not found.");
    }
    const deleted_user = db.users[user_index];
    db.users.splice(user_index, 1);
    return deleted_user;
  },
  deleteAllUsers: (_, __, { db }) => {
    const length = db.users.length;
    db.users.splice(0, length);
    return {
      count: length,
    };
  },

  createEvent: (parent, { data }, { pubSub, db }) => {
    const event = {
      id: nanoid(),
      title: data.title,
      desc: data.desc,
      date: data.date,
      from: data.from,
      to: data.to,
    };
    db.events.push(event);
    pubSub.publish("eventCreated", { eventCreated: event });
    return event;
  },
  updateEvent: (parent, { id, data }, { db }) => {
    const event_index = db.events.findIndex((event) => event.id === id);
    if (event_index === -1) {
      throw new Error("Event not found.");
    }
    const updated_event = (events[event_index] = {
      ...db.events[event_index],
      ...data,
    });
    return updated_event;
  },
  deleteEvent: (parent, { id }, { db }) => {
    const event_index = db.events.findIndex((event) => event.id === id);
    if (event_index === -1) {
      throw new Error("Event is not found.");
    }
    const deleted_event = db.events[event_index];
    db.events.splice(event_index, 1);
    return deleted_event;
  },
  deleteAllEvents: (_, __, { db }) => {
    const length = db.events.length;
    db.events.splice(0, length);
    return {
      count: length,
    };
  },
  createParticipant: (parent, { data }, { pubSub, db }) => {
    const participant = {
      id: nanoid(),
      user_id: data.user_id,
      event_id: data.event_id,
    };
    db.participants.push(participant);
    pubSub.publish("participantAdded", { participantAdded: participant });
    return participant;
  },
  updateParticipant: (parent, { id, data }, { db }) => {
    const participant_index = db.participants.findIndex(
      (participant) => participant.id === id
    );
    if (participant_index === -1) {
      throw new Error("Participant not found");
    }
    const updated_participant = (db.participants[participant_index] = {
      ...db.participants[participant_index],
      ...data,
    });
    return updated_participant;
  },
  deleteParticipant: (parent, { id }, { db }) => {
    const participant_index = db.participants.findIndex(
      (participant) => participant.id === id
    );
    if (participant_index === -1) {
      throw new Error("Participant is not found.");
    }
    const deleted_participant = db.participants[participant_index];
    db.participants.splice(participant_index, 1);
    return deleted_participant;
  },
  deleteAllParticipants: (_, __, { db }) => {
    const length = db.participants.length;
    db.participants.splice(0, length);
    return {
      count: length,
    };
  },
  createLocation: (parent, { data }, { db }) => {
    const location = {
      id: nanoid(),
      name: data.name,
      desc: data.desc,
      lat: data.lat,
      lng: data.lng,
    };
    db.locations.push(location);
    return location;
  },
  updateLocation: (parent, { id, data }, { db }) => {
    const location_index = db.locations.findIndex(
      (location) => location.id === id
    );
    if (location_index === -1) {
      throw new Error("Locaton is not found.");
    }
    const updated_location = (db.locations[location_index] = {
      ...db.locations[location_index],
      ...data,
    });
    return updated_location;
  },
  deleteLocation: (parent, { id }, { db }) => {
    const location_index = db.locations.findIndex(
      (location) => location.id === id
    );
    if (location_index === -1) {
      throw new Error("Location is not found.");
    }
    const deleted_location = db.locations[location_index];
    db.locations.splice(location_index, 1);
    return deleted_location;
  },
  deleteAllLocations: (_, __, { db }) => {
    const length = db.locations.length;
    db.locations.splice(0, length);
    return {
      count: length,
    };
  },
};
