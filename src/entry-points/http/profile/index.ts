import createProfileSchema from "@/domain/usecase/profile/create-profile.schema";
import { createProfileUsecase } from "@/domain/usecase/profile/create-profile.usecase";
import fastify, { FastifyPluginAsync } from "fastify";

const profileRoutes: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify
    .withTypeProvider()
    .post("/", { schema: createProfileSchema }, async (request: any) => {
      try {
        const profileData = request?.body;
        const createProfileResponse = await createProfileUsecase(profileData);
        if (createProfileResponse) {
          return {
            statusCode: 200,
            message: "profile created successfully",
            timeStamp: new Date().toISOString(),
            result: createProfileResponse,
          };
        }
      } catch (error) {
        throw error;
      }
    });
};
export default profileRoutes;
