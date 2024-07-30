import {
  type TypeBoxTypeProvider,
  type FastifyPluginAsyncTypebox,
} from "@fastify/type-provider-typebox";

const root: FastifyPluginAsyncTypebox = async (
  fastify,
  opts,
): Promise<void> => {
  fastify
    .withTypeProvider<TypeBoxTypeProvider>()
    .get("/", { schema: {} }, async (request, reply) => ({ root: true }));
};

export default root;
