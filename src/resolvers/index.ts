import { Subscription } from './Subscription'
import { Ticket } from './Ticket';
import { User } from './User';
import { Theater } from './Theater';
import { TheaterRoom } from './TheaterRoom';

const path = require("path");
const { mergeResolvers, fileLoader } = require("merge-graphql-schemas");

const resolversQuery = fileLoader(path.join(__dirname, "./Query/**/*.ts"));
const Query = mergeResolvers(resolversQuery);

const resolversMutation = fileLoader(path.join(__dirname, "./Mutation/**/*.ts"));
const Mutation = mergeResolvers(resolversMutation);

export default {
  Query,
  Mutation,
  Subscription,
  Ticket,
  User,
  Theater,
  TheaterRoom,
};
