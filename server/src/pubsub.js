// const { createPubSub } = require("graphql-yoga");
import { createPubSub } from "graphql-yoga";
// const Redis = require("ioredis");
import { Redis } from "ioredis";
// const { createRedisEventTarget } = require("@graphql-yoga/redis-event-target");
import { createRedisEventTarget } from "@graphql-yoga/redis-event-target";
// const dotenv = require("dotenv");
import dotenv from "dotenv";
dotenv.config();

const options = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
  retryStrategy: (times) => {
    // reconnect after
    return Math.min(times * 50, 2000);
  },
};

const publishClient = new Redis(options);
const subscribeClient = new Redis(options);

const eventTarget = createRedisEventTarget({
  publishClient,
  subscribeClient,
});
const pubSub = createPubSub({ eventTarget });

export default pubSub;
