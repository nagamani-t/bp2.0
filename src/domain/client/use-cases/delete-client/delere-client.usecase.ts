import { deleteClientRepo,  } from "../../../../data-access/client.repo";

const deleteClientUseCase = async (client_id:any) => {
  const data = await deleteClientRepo(client_id);
  return data;
};

export default deleteClientUseCase;