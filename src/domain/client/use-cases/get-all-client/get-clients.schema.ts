import { type FastifySchema } from "fastify";

export const getClientSchema: FastifySchema = {
  summary: "Get all clients",
  tags: ["clients"],
  security: [{}],
  response: {},
} satisfies FastifySchema;
