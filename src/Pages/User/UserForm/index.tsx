import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material/";
import { UserInterface } from "../../../Interfaces/UserInterfaces";
import UserformComponent from "./Components/UserFormComponent";

interface UserFormProps {
  open: boolean;
  handleClose: () => void;
  type: "EDIT" | "CREATE";
  employee?: UserInterface;
}

const UserForm = ({ open, handleClose, type, employee }: UserFormProps) => {
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        {type === "CREATE"
          ? "Create employee"
          : "Edit employee: " + employee?.name}
      </DialogTitle>
      <DialogContent>
        <UserformComponent />
      </DialogContent>
    </Dialog>
  );
};

export default UserForm;
