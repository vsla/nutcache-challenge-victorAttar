import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { UserInterface } from "../../../Interfaces/UserInterfaces";
import { GetUsers } from "../../../Services/UserService";
import UserTable from "./Components/UserTable";

const UserList: React.FC = () => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [userList, setUserlist] = useState<UserInterface[]>([]);

  const getUsersList = async () => {
    setLoading(true)
    const response = await GetUsers();
    setUserlist(response.data);
    setLoading(false)
  };

  useEffect(() => {
    getUsersList();
  }, []);

  return (
    <UserListContainer>
      <UserTable UserList={userList} loading={loading} />
    </UserListContainer>
  );
};

const UserListContainer = styled.div`
  display: flex;
  flex-grow: 1;
  margin: 24px 0px;
`;

export default UserList;
