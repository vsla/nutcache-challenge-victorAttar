import { UserInterface } from "../Interfaces/UserInterfaces";
import Api from "./Api";

export const GetUsers = async () => {
  try {
    const response = await Api.get<UserInterface[]>("");

    return response;
  } catch (error) {
    return { data: [] };
  }
};
export const GetUser = () => {};
export const CreateUser = () => {};
export const DeleteUser = async (_id: number) => {
  try {
    const response = await Api.delete("/" + _id);

    return response;
  } catch (error) {
    return { data: [] };
  }
};
export const EditUser = () => {};
