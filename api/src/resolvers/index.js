import prisma from "../database.js";
import Mutation from "./mutation.js";
import Query from "./query.js";


const Product = {
  id: (parent) => parent.id,
  name: (parent) => parent.name,
  price: (parent) => parent.price,
  description: (parent) => parent.description,
};
const resolvers = {
  Product,
  Query,
  Mutation,
};
export default resolvers;
