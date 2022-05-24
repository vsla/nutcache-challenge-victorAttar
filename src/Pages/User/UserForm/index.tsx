import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material/";
import {
  UserInterface,
  EditUserPayloadInterface,
} from "../../../Interfaces/UserInterfaces";
import UserformComponent from "./Components/UserFormComponent";
import { CreateUser, EditUser } from "Services/UserService";

interface UserFormProps {
  open: boolean;
  handleClose: () => void;
  type: "EDIT" | "CREATE";
  employee?: UserInterface | null;
}

const UserForm = ({ open, handleClose, type, employee }: UserFormProps) => {
  const handleSubmit = async (values: UserInterface) => {
    if (type === "CREATE") {
      await CreateUser(values);
      handleClose();
    } else {
      if (employee) {
        let newValues: EditUserPayloadInterface = values;
        delete newValues._id;
        await EditUser(newValues, employee._id);
        handleClose();
      }
    }
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        {type === "CREATE"
          ? "Create employee"
          : "Edit employee: " + employee?.name}
      </DialogTitle>
      <DialogContent>
        <UserformComponent employee={employee} handleSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default UserForm;
