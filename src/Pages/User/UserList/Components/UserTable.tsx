import React, { useState } from "react";
import styled from "styled-components";

import {
  Button,
  CircularProgress,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { Add, Delete, Edit } from "@mui/icons-material";

import UserForm from "../../UserForm";
import { UserInterface } from "../../../../Interfaces/UserInterfaces";
import Paper from "../../../../Components/Paper";

interface UserTableProps {
  UserList: UserInterface[] | [];
  loading: Boolean;
  handleDeleteUser: (_id: number) => void;
}

const UserTable = ({ UserList, loading, handleDeleteUser }: UserTableProps) => {
  const [openModal, setOpenModal] = useState<boolean>(true);
  const [modalType, setModalType] = useState<"EDIT" | "CREATE">("CREATE");

  const handleOpenPopUp = (_id: number) => {};

  const CreateUserButton = () => {
    return (
      <Button
        variant="contained"
        startIcon={<Add />}
        onClick={() => {
          setOpenModal(true);
          setModalType("CREATE");
        }}
      >
        New User
      </Button>
    );
  };

  return (
    <UserTableContainer>
      <UserForm
        handleClose={() => setOpenModal(false)}
        open={openModal}
        type={modalType}
      />
      <Paper title="Employee List" ButtonTitle={CreateUserButton}>
        {!loading ? (
          <TableContainer>
            <Table aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Start Date</TableCell>
                  <TableCell align="right">Team</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {UserList.map(({ _id, name, Email, StartDate, Team }) => (
                  <TableRow key={name}>
                    <TableCell component="th" scope="row">
                      {name}
                    </TableCell>
                    <TableCell align="right">{Email}</TableCell>
                    <TableCell align="right">
                      {new Date(StartDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell align="right">{Team}</TableCell>

                    <TableCell align="right">
                      <IconButton onClick={() => handleOpenPopUp(_id)}>
                        <Edit />
                      </IconButton>
                      <IconButton onClick={() => handleDeleteUser(_id)}>
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <LoadingDiv>
            <CircularProgress />
          </LoadingDiv>
        )}
      </Paper>
    </UserTableContainer>
  );
};

const UserTableContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  width: 100%;
`;

const LoadingDiv = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;

export default UserTable;
