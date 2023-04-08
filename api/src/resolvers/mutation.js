import { GraphQLError } from "graphql";
import { GraphQLUpload, graphqlUploadExpress } from "graphql-upload";
import { dirname, join } from "path";
import { finished } from "stream/promises";
import prisma from "../database.js";

const Mutation = {
  createManyProducts: async (parent, { data }) => {
    const product = await Promise.all(
      data.map(async (postData) => {
        const product = await prisma.product.create({
          data: {
            name: postData.name,
            description: postData.description,
            price: postData.price,
            image: postData.image,
          },
        });

        return product;
      })
    );

    return product;
  },
  createProduct: async (parent, { data }) => {
    const product = await prisma.product.create({
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
        image: "https://dummyimage.com/250x250/000/fff",
      },
    });
    return product;
  },
  eraseAllProducts: async (parent, args) => {
    await prisma.product.deleteMany({});
  },
  editProduct: async (parent, { data }) => {
    console.log(data, "ARGSS");
    const foundProductToEdit = await prisma.product.update({
      where: { id: Number(data.id) },
      data: {
        name: data.name,
        description: data.description,
        price: Number(data.price),
      },
    });
    return foundProductToEdit;
  },
};

export default Mutation;
