import prisma from "../database.js";

const Query = {
  products: async (parent, args) => {
    return prisma.product.findMany({});
  },

  product: (parent, args) => {
    return prisma.product.findUnique({ where: { id: args.id } });
  },
};
export default Query;
