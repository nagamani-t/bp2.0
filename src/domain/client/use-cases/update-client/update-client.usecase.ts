import { updateClientRepo } from "../../../../data-access/client.repo";

const updateClientUseCase = async (request: any,client_Id:any) => {
  const data = await updateClientRepo(request,client_Id);
  return data;
};

export default updateClientUseCase;
