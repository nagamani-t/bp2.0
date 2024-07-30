import { type FastifySchema } from "fastify";

const deleteClientFastifySchema = {
  description: "delete client",
  tags: ["clients"],
} satisfies FastifySchema;

export default deleteClientFastifySchema;