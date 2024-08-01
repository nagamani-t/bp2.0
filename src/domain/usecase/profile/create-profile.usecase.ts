import { createProfileRepo } from "@/data-access/user.repo";

export const createProfileUsecase = async (profileData) => {
  const data = createProfileRepo(profileData);
  return data;
};
