import React, { useState } from "react";
import styled from "styled-components";

import {
  Grid,
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

import { Add, Delete, Edit, Remove } from "@mui/icons-material";

import UserForm from "../../UserForm";
import { UserInterface } from "../../../../Interfaces/UserInterfaces";
import Paper from "../../../../Components/Paper";

interface UserTableProps {
  UserList: UserInterface[] | [];
  loading: Boolean;
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  handleCloseModalForm: () => void;
  handleDeleteUser: (employee: UserInterface) => void;
}

const UserTable = ({
  UserList,
  openModal,
  setOpenModal,
  handleCloseModalForm,
  loading,
  handleDeleteUser,
}: UserTableProps) => {
  const [modalType, setModalType] = useState<"EDIT" | "CREATE">("CREATE");
  const [userToEdit, setUserToEdit] = useState<UserInterface | null>(null);

  const handleEditUser = (employee: UserInterface) => {
    setUserToEdit(employee);
    setModalType("EDIT");
    setOpenModal(true);
  };

  const handleCreateUser = () => {
    setModalType("CREATE");
    setUserToEdit(null);
    setOpenModal(true);
  };

  const ButtonContainer = () => {
    return (
      <Grid container justifyContent='end' spacing={1}>
        <Grid item xs="auto">
          <Button
            size="small"
            variant="contained"
            startIcon={<Add />}
            onClick={handleCreateUser}
          >
            New User
          </Button>
        </Grid>
        {UserList.length > 0 ? (
          <>
            <Grid item xs="auto">
              <Button
                size="small"
                variant="outlined"
                startIcon={<Edit />}
                onClick={() => {
                  handleEditUser(UserList[UserList.length - 1]);
                }}
              >
                Edit last user
              </Button>
            </Grid>
            <Grid item xs="auto">
              <Button
                size="small"
                variant="outlined"
                startIcon={<Remove />}
                onClick={() => {
                  handleDeleteUser(UserList[UserList.length - 1]);
                }}
              >
                Remove last user
              </Button>
            </Grid>
          </>
        ) : (
          <></>
        )}
      </Grid>
    );
  };

  return (
    <UserTableContainer>
      <UserForm
        employee={userToEdit}
        handleClose={() => {
          handleCloseModalForm();
          setUserToEdit(null);
        }}
        open={openModal}
        type={modalType}
      />
      <Paper title="Employee List" ButtonTitle={ButtonContainer}>
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
                {UserList.length > 0 ? (
                  UserList.map((employee) => {
                    const { _id, name, Email, StartDate, Team } = employee;
                    return (
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
                          <IconButton onClick={() => handleEditUser(employee)}>
                            <Edit />
                          </IconButton>
                          <IconButton
                            onClick={() => handleDeleteUser(employee)}
                          >
                            <Delete />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} align="center">
                      No registered employee
                    </TableCell>
                  </TableRow>
                )}
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
