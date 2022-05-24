import {
  UserInterface,
  EditUserPayloadInterface,
} from "../Interfaces/UserInterfaces";
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

export const CreateUser = async (userData: UserInterface) => {
  try {
    const response = await Api.post("", userData);

    return response;
  } catch (error) {
    return { data: [] };
  }
};

export const DeleteUser = async (_id: number) => {
  try {
    const response = await Api.delete("/" + _id);

    return response;
  } catch (error) {
    return { data: [] };
  }
};

export const EditUser = async (
  userData: EditUserPayloadInterface,
  _id: number
) => {
  try {
    const response = await Api.put("/" + _id, userData);

    return response;
  } catch (error) {
    return { data: [] };
  }
};
