import { type FastifySchema } from "fastify";

export const getClientByIdSchema: FastifySchema = {
  summary: "Get client by id",
  tags: ["clients"],
  security: [{}],
  response: {},
} satisfies FastifySchema;
