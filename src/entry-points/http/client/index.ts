import type {
  FastifyPluginAsyncTypebox,
  TypeBoxTypeProvider,
} from "@fastify/type-provider-typebox";
import { getClientSchema } from "@/domain/client/use-cases/get-all-client/get-clients.schema";
import getAllClientsUseCase from "@/domain/client/use-cases/get-all-client/get-clients.usecase";
import createClientFastifySchema from "@/domain/client/use-cases/create-client/create-client.schema";
import createClientUseCase from "@/domain/client/use-cases/create-client/create-client.usecase";
import updateClientFastifySchema from "@/domain/client/use-cases/update-client/update-client.schema";
import updateClientUseCase from "@/domain/client/use-cases/update-client/update-client.usecase";
import { getClientByIdSchema } from "@/domain/client/use-cases/get-one-client/get-client-by-Id.schema";
import getClientByIdUseCase from "@/domain/client/use-cases/get-one-client/get-client-by-Id.usecase";
import { v4 as uuidv4 } from "uuid";
import deleteClientFastifySchema from "@/domain/client/use-cases/delete-client/delete-client.schema";
import deleteClientUseCase from "@/domain/client/use-cases/delete-client/delere-client.usecase";
const example: FastifyPluginAsyncTypebox = async (
  fastify,
  opts,
): Promise<void> => {
  fastify
    .withTypeProvider<TypeBoxTypeProvider>()
    .get("/", { schema: getClientSchema }, async () => {
      const getAllclients = await getAllClientsUseCase();
      return getAllclients;
    })
    .post(
      "/",
      { schema: createClientFastifySchema },
      async (request:any, reply) => {
        console.log("request=====>",request?.body?.name)
        const client = {
          client_id: uuidv4(),
          name: request?.body?.name,
          mobileNumber: request?.body?.mobileNumber,
          email: request?.body?.email,
          businessName:request?.body?.businessName,
          
        };
        const example = await createClientUseCase(client);
        return example;
      },
    )
    .post(
      "/:client_id",
      { schema: updateClientFastifySchema },
      async (request:any, reply) => {
        console.log("request",request.body,request.params)
       const client_id = request?.params?.client_id
        const updatedClient = await updateClientUseCase(request.body,client_id);
        if (updatedClient) {
          await reply.code(200).send(updatedClient);
        }
      },
    )
    .get(
      "/:client_id",
      { schema: getClientByIdSchema },
      async (request:any, reply) => {
        const  client_id = request?.params?.client_Id
        const client = await getClientByIdUseCase(client_id);
        return client;
      },
    )
    .delete(
      "/:client_id",
      { schema: deleteClientFastifySchema },
      async (request:any, reply) => {
        const client_Id = request?.params?.client_id
        console.log("client_id",client_Id)
        const client = await deleteClientUseCase(client_Id);
        return client;
      },
    )
};

export default example;
