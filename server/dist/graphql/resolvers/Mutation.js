"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.Mutation=void 0;var _nanoid=require("nanoid");function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}return target}function _defineProperty(obj,key,value){key=_toPropertyKey(key);if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _toPropertyKey(arg){var key=_toPrimitive(arg,"string");return _typeof(key)==="symbol"?key:String(key)}function _toPrimitive(input,hint){if(_typeof(input)!=="object"||input===null)return input;var prim=input[Symbol.toPrimitive];if(prim!==undefined){var res=prim.call(input,hint||"default");if(_typeof(res)!=="object")return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return(hint==="string"?String:Number)(input)}// const { nanoid } = require("nanoid");
var Mutation={createUser:function createUser(parent,_ref,_ref2){var data=_ref.data;var pubSub=_ref2.pubSub,db=_ref2.db;var user={id:(0,_nanoid.nanoid)(),username:data.username,email:data.email};db.users.push(user);pubSub.publish("userCreated",{userCreated:user});return user},updateUser:function updateUser(parent,_ref3,_ref4){var id=_ref3.id,data=_ref3.data;var pubSub=_ref4.pubSub,db=_ref4.db;var user_index=db.users.findIndex(function(user){return user.id===id});if(user_index===-1){throw new Error("User not found.")}var updated_user=users[user_index]=_objectSpread(_objectSpread({},db.users[user_index]),data);pubSub.publish("userUpdated",{userUpdated:updated_user});return updated_user},deleteUser:function deleteUser(parent,_ref5,_ref6){var id=_ref5.id;var pubSub=_ref6.pubSub,db=_ref6.db;var user_index=db.users.findIndex(function(user){return user.id===id});if(user_index===-1){throw new Error("User not found.")}var deleted_user=db.users[user_index];db.users.splice(user_index,1);return deleted_user},deleteAllUsers:function deleteAllUsers(_,__,_ref7){var db=_ref7.db;var length=db.users.length;db.users.splice(0,length);return{count:length}},createEvent:function createEvent(parent,_ref8,_ref9){var data=_ref8.data;var pubSub=_ref9.pubSub,db=_ref9.db;var event={id:(0,_nanoid.nanoid)(),title:data.title,desc:data.desc,date:data.date,from:data.from,to:data.to};db.events.push(event);pubSub.publish("eventCreated",{eventCreated:event});return event},updateEvent:function updateEvent(parent,_ref10,_ref11){var id=_ref10.id,data=_ref10.data;var db=_ref11.db;var event_index=db.events.findIndex(function(event){return event.id===id});if(event_index===-1){throw new Error("Event not found.")}var updated_event=events[event_index]=_objectSpread(_objectSpread({},db.events[event_index]),data);return updated_event},deleteEvent:function deleteEvent(parent,_ref12,_ref13){var id=_ref12.id;var db=_ref13.db;var event_index=db.events.findIndex(function(event){return event.id===id});if(event_index===-1){throw new Error("Event is not found.")}var deleted_event=db.events[event_index];db.events.splice(event_index,1);return deleted_event},deleteAllEvents:function deleteAllEvents(_,__,_ref14){var db=_ref14.db;var length=db.events.length;db.events.splice(0,length);return{count:length}},createParticipant:function createParticipant(parent,_ref15,_ref16){var data=_ref15.data;var pubSub=_ref16.pubSub,db=_ref16.db;var participant={id:(0,_nanoid.nanoid)(),user_id:data.user_id,event_id:data.event_id};db.participants.push(participant);pubSub.publish("participantAdded",{participantAdded:participant});return participant},updateParticipant:function updateParticipant(parent,_ref17,_ref18){var id=_ref17.id,data=_ref17.data;var db=_ref18.db;var participant_index=db.participants.findIndex(function(participant){return participant.id===id});if(participant_index===-1){throw new Error("Participant not found")}var updated_participant=db.participants[participant_index]=_objectSpread(_objectSpread({},db.participants[participant_index]),data);return updated_participant},deleteParticipant:function deleteParticipant(parent,_ref19,_ref20){var id=_ref19.id;var db=_ref20.db;var participant_index=db.participants.findIndex(function(participant){return participant.id===id});if(participant_index===-1){throw new Error("Participant is not found.")}var deleted_participant=db.participants[participant_index];db.participants.splice(participant_index,1);return deleted_participant},deleteAllParticipants:function deleteAllParticipants(_,__,_ref21){var db=_ref21.db;var length=db.participants.length;db.participants.splice(0,length);return{count:length}},createLocation:function createLocation(parent,_ref22,_ref23){var data=_ref22.data;var db=_ref23.db;var location={id:(0,_nanoid.nanoid)(),name:data.name,desc:data.desc,lat:data.lat,lng:data.lng};db.locations.push(location);return location},updateLocation:function updateLocation(parent,_ref24,_ref25){var id=_ref24.id,data=_ref24.data;var db=_ref25.db;var location_index=db.locations.findIndex(function(location){return location.id===id});if(location_index===-1){throw new Error("Locaton is not found.")}var updated_location=db.locations[location_index]=_objectSpread(_objectSpread({},db.locations[location_index]),data);return updated_location},deleteLocation:function deleteLocation(parent,_ref26,_ref27){var id=_ref26.id;var db=_ref27.db;var location_index=db.locations.findIndex(function(location){return location.id===id});if(location_index===-1){throw new Error("Location is not found.")}var deleted_location=db.locations[location_index];db.locations.splice(location_index,1);return deleted_location},deleteAllLocations:function deleteAllLocations(_,__,_ref28){var db=_ref28.db;var length=db.locations.length;db.locations.splice(0,length);return{count:length}}};exports.Mutation=Mutation;