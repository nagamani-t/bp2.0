import fp from "fastify-plugin";
import fastifyEnv from "@fastify/env";

const schema = {
  type: "object",
  required: ["MONGO_CONNECTION_STRING"],
  properties: {
    MONGO_CONNECTION_STRING: {
      type: "string",
    },
  },
};


export default fp(async (fastify) => {
  const options = {
    dotenv: true,
    data: process.env,
    schema,
  };

  fastify.register(fastifyEnv, options);
  await fastify.after();
});
