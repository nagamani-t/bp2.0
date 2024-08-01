import { FastifySchema } from "fastify";

const createProfileSchema: FastifySchema = {
  summary: "create profile",
  tags: ["profile"],
  response: {},
} satisfies FastifySchema;
export default createProfileSchema;
