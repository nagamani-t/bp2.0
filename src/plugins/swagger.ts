/* eslint-disable @typescript-eslint/no-floating-promises */
import fp from "fastify-plugin";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";

export default fp(async (fastify) => {
  fastify.register(swagger, {
    openapi: {
      info: {
        title: "Data Ai v1",
        description: "",
        version: "0.1.0",
      },
      servers: [
        {
          url: "http://localhost:4000",
        },
      ],
    },
    hideUntagged: false,
  });
  fastify.register(swaggerUi);
});
