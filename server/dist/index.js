"use strict";var _http=require("http");var _graphqlYoga=require("graphql-yoga");var _schema=require("@graphql-tools/schema");var _resolvers=_interopRequireDefault(require("./graphql/resolvers"));var _data=_interopRequireDefault(require("./data"));var _pubsub=_interopRequireDefault(require("./pubsub"));var _typeDefs=_interopRequireDefault(require("./graphql/type-defs"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}// const { createServer } = require("http");
// const { createYoga } = require("graphql-yoga");
// const { makeExecutableSchema } = require("@graphql-tools/schema");
// const resolvers = require("./graphql/resolvers");
// const db = require("./data");
// const pubSub = require("./pubsub");
// const typeDefs = require("./graphql/type-defs");
var schema=(0,_schema.makeExecutableSchema)({typeDefs:_typeDefs["default"],resolvers:_resolvers["default"]});var yoga=(0,_graphqlYoga.createYoga)({schema:schema,context:{pubSub:_pubsub["default"],db:_data["default"]}});var server=(0,_http.createServer)(yoga);server.listen(4000,function(){console.info("Server is running on http://localhost:4000/graphql")});