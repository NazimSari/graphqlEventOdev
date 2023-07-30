// const { createServer } = require("http");
import { createServer } from "http";
// const { createYoga } = require("graphql-yoga");
import { createYoga } from "graphql-yoga";
// const { makeExecutableSchema } = require("@graphql-tools/schema");
import { makeExecutableSchema } from "@graphql-tools/schema";
// const resolvers = require("./graphql/resolvers");
import resolvers from "./graphql/resolvers";
// const db = require("./data");
import db from "./data";
// const pubSub = require("./pubsub");
import pubSub from "./pubsub";
// const typeDefs = require("./graphql/type-defs");
import typeDefs from "./graphql/type-defs";

const schema = makeExecutableSchema({ typeDefs, resolvers });
const yoga = createYoga({ schema, context: { pubSub, db } });
const server = createServer(yoga);

server.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql");
});
