import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Button,
} from "@mui/material/";
import { UserInterface } from "Interfaces/UserInterfaces";

interface ModalDeleteUserInterface {
  openModal: boolean;
  handleDelete: (_id: number) => void;
  closeModalDeleteUser: () => void;
  employee: UserInterface | null;
}

export default function ModalDeleteUser({
  openModal,
  closeModalDeleteUser,
  handleDelete,
  employee,
}: ModalDeleteUserInterface) {
  const closeModal = () => closeModalDeleteUser();

  return (
    <Dialog onClose={closeModal} open={openModal}>
      <DialogTitle>
        Delete employee - {employee ? employee.name : ""}
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => employee && handleDelete(employee._id)}
            >
              Delete user
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" onClick={closeModal}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
