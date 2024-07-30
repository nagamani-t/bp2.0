
import { getClientByIdRepo } from "../../../../data-access/client.repo";

const getClientByIdUseCase = async (req:any) => {
  const getAllClientExample = await getClientByIdRepo(req);
  return getAllClientExample;
};

export default getClientByIdUseCase;
