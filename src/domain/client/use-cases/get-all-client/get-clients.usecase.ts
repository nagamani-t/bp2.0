import { getAllClientRepo } from "@/data-access/client.repo";

const getAllClientsUseCase = async () => {
  const getAllClientExample = await getAllClientRepo();
  return getAllClientExample;
};

export default getAllClientsUseCase;
