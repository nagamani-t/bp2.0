import fp from "fastify-plugin";

export type SupportPluginOptions = {
  // Specify Support plugin options here
};

// The use of fastify-plugin is required to be able
// to export the decorators to the outer scope
export default fp<SupportPluginOptions>(async (fastify, opts) => {
  fastify.decorate("someSupport", () => "hugs");
});

// When using .decorate you have to specify added properties for Typescript
declare module "fastify" {
  export type FastifyInstance = {
    someSupport(): string;
    config: {
      MONGO_CONNECTION_STRING: string;
      // This should be same as the confKey in options
      // specify your typing here
    };
  };
}
