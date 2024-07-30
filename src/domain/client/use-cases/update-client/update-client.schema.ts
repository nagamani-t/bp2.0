import { type FastifySchema } from "fastify";

const updateClientFastifySchema = {
  description: "update client",
  tags: ["clients"],
} satisfies FastifySchema;

export default updateClientFastifySchema;
