import React from "react";
import styled from "styled-components";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IconButton } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import { UserInterface } from "../../../../Interfaces/UserInterfaces";
import Paper from "../../../../Components/Paper";

const rows: UserInterface[] = [
  {
    id: 1,
    name: "Victor Sena",
    birthDate: new Date(),
    Gender: "Male",
    Email: "teste@teste.com",
    CPF: "111.111.111.00",
    StartDate: new Date(),
    Team: "FrontEnd",
  },
  {
    id: 1,
    name: "Victor Sena",
    birthDate: new Date(),
    Gender: "Male",
    Email: "teste@teste.com",
    CPF: "111.111.111.00",
    StartDate: new Date(),
    Team: "FrontEnd",
  },
  {
    id: 1,
    name: "Victor Sena",
    birthDate: new Date(),
    Gender: "Male",
    Email: "teste@teste.com",
    CPF: "111.111.111.00",
    StartDate: new Date(),
    Team: "FrontEnd",
  },
  {
    id: 1,
    name: "Victor Sena",
    birthDate: new Date(),
    Gender: "Male",
    Email: "teste@teste.com",
    CPF: "111.111.111.00",
    StartDate: new Date(),
    Team: "FrontEnd",
  },
];

const UserTable: React.FC = () => {
  const handleOpenPopUp = (id: number) => {};

  return (
    <UserTableContainer>
      <Paper title="Users">
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
              {rows.map(
                ({
                  id,
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
                      {birthDate.toLocaleDateString()}
                    </TableCell>
                    <TableCell align="right">{Gender}</TableCell>
                    <TableCell align="right">{Email}</TableCell>
                    <TableCell align="right">{CPF}</TableCell>
                    <TableCell align="right">
                      {StartDate.toLocaleDateString()}
                    </TableCell>
                    <TableCell align="right">{Team}</TableCell>
                    <TableCell align="right">
                      <IconButton onClick={() => handleOpenPopUp(id)}>
                        <RemoveRedEyeIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </UserTableContainer>
  );
};

const UserTableContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;

export default UserTable;
