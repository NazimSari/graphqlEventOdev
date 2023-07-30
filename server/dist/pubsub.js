"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _graphqlYoga=require("graphql-yoga");var _ioredis=require("ioredis");var _redisEventTarget=require("@graphql-yoga/redis-event-target");var _dotenv=_interopRequireDefault(require("dotenv"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}// const { createPubSub } = require("graphql-yoga");
// const Redis = require("ioredis");
// const { createRedisEventTarget } = require("@graphql-yoga/redis-event-target");
// const dotenv = require("dotenv");
_dotenv["default"].config();var options={host:"redis-17654.c240.us-east-1-3.ec2.cloud.redislabs.com",port:17654,password:"wDeRjigSrYG70kWYvrfXjcwvjQq8RbEE",retryStrategy:function retryStrategy(times){// reconnect after
return Math.min(times*50,2000)}};var publishClient=new _ioredis.Redis(options);var subscribeClient=new _ioredis.Redis(options);var eventTarget=(0,_redisEventTarget.createRedisEventTarget)({publishClient:publishClient,subscribeClient:subscribeClient});var pubSub=(0,_graphqlYoga.createPubSub)({eventTarget:eventTarget});var _default=pubSub;exports["default"]=_default;