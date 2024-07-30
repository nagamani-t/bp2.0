// Require('module-alias/register')
import { join } from "path";
import AutoLoad, { type AutoloadPluginOptions } from "@fastify/autoload";
import { type FastifyPluginAsync } from "fastify";
import { TypeBoxValidatorCompiler } from "@fastify/type-provider-typebox";
import { connectDb } from "./data-access/config/connect-to-db";

export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;

// Pass --options via CLI arguments in command to enable these options.
const options: AppOptions = {};

const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
  opts,
): Promise<void> => {
  console.log("opts", opts);
  // Place here your custom code!
  void fastify.setValidatorCompiler(TypeBoxValidatorCompiler);
  connectDb();
  // Do not touch the following lines
  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  void fastify.register(AutoLoad, {
    dir: join(__dirname, "plugins"),
    options: opts,
  });

  
  // This loads all plugins defined in routes
  // define your routes in one of these
  void fastify.register(AutoLoad, {
    dir: join(__dirname, "./entry-points/http/"),
    options: { ...opts, prefix: "/api/v1/data-ai" },
  });
};


export default app;
export { app, options };
