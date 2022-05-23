import React from "react";
import styled from "styled-components";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { CircularProgress, IconButton } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import { UserInterface } from "../../../../Interfaces/UserInterfaces";
import Paper from "../../../../Components/Paper";

interface UserTableProps {
  UserList: UserInterface[] | [];
  loading: Boolean;
}

const UserTable = ({ UserList, loading }: UserTableProps) => {
  const handleOpenPopUp = (_id: number) => {};

  return (
    <UserTableContainer>
      <Paper title="Users">
        {!loading ? (
          <TableContainer>
            <Table aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Birth Date</TableCell>
                  <TableCell align="right">Gender</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">CPF</TableCell>
                  <TableCell align="right">Start Date</TableCell>
                  <TableCell align="right">Team</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {UserList.map(
                  ({
                    _id,
                    name,
                    birthDate,
                    Gender,
                    Email,
                    CPF,
                    StartDate,
                    Team,
                  }) => (
                    <TableRow key={name}>
                      <TableCell component="th" scope="row">
                        {name}
                      </TableCell>
                      <TableCell align="right">
                        {new Date(birthDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell align="right">{Gender}</TableCell>
                      <TableCell align="right">{Email}</TableCell>
                      <TableCell align="right">{CPF}</TableCell>
                      <TableCell align="right">
                        {new Date(StartDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell align="right">{Team}</TableCell>
                      <TableCell align="right">
                        <IconButton onClick={() => handleOpenPopUp(_id)}>
                          <RemoveRedEyeIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  )
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
