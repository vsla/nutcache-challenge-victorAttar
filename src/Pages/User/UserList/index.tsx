import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { UserInterface } from "Interfaces/UserInterfaces";
import { DeleteUser, GetUsers } from "Services/UserService";
import UserTable from "./Components/UserTable";
import ModalDeleteUser from "./Components/ModalDeleteUser";

const UserList: React.FC = () => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [userList, setUserlist] = useState<UserInterface[]>([]);
  const [openModalFormUser, setOpenModalFormUser] = useState<boolean>(false);
  const [openModalDeleteUser, setOpenModalDeleteUser] = useState<boolean>(false);
  const [userToDelete, setUserToDelete] = useState<UserInterface | null>(null);

  const getUsersList = async () => {
    setLoading(true);
    const response = await GetUsers();
    setUserlist(response.data);
    setLoading(false);
  };

  const handleDeleteUser = async (_id: number) => {
    await DeleteUser(_id);
    closeModalDeleteUser()
    getUsersList();
  };

  const confirmDeleteUser = (employee: UserInterface) => {
    setUserToDelete(employee);
    setOpenModalDeleteUser(true);
  };

  const closeModalDeleteUser = () => {
    setOpenModalDeleteUser(false);
    setUserToDelete(null);
  };

  const handleCloseModalForm = () => {
    setOpenModalFormUser(false);
    getUsersList();
  };

  useEffect(() => {
    getUsersList();
  }, []);

  return (
    <UserListContainer>
      <ModalDeleteUser
        openModal={openModalDeleteUser}
        handleDelete={handleDeleteUser}
        closeModalDeleteUser={closeModalDeleteUser}
        employee={userToDelete}
      />
      <UserTable
        openModal={openModalFormUser}
        setOpenModal={setOpenModalFormUser}
        handleCloseModalForm={handleCloseModalForm}
        UserList={userList}
        loading={loading}
        handleDeleteUser={confirmDeleteUser}
      />
    </UserListContainer>
  );
};

const UserListContainer = styled.div`
  display: flex;
  flex-grow: 1;
  margin: 24px 0px;
`;

export default UserList;
