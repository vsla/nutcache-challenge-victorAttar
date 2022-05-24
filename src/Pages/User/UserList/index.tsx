import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { UserInterface } from "Interfaces/UserInterfaces";
import { DeleteUser, GetUsers } from "Services/UserService";
import UserTable from "./Components/UserTable";

const UserList: React.FC = () => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [userList, setUserlist] = useState<UserInterface[]>([]);

  const getUsersList = async () => {
    setLoading(true);
    const response = await GetUsers();
    setUserlist(response.data);
    setLoading(false);
  };

  const handleDeleteUser = async (_id: number) => {
    const response = await DeleteUser(_id);
  };

  useEffect(() => {
    getUsersList();
  }, []);

  return (
    <UserListContainer>
      <UserTable
        UserList={userList}
        loading={loading}
        handleDeleteUser={handleDeleteUser}
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
