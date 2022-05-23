import React, { useState } from "react";
import styled from "styled-components";
import UserTable from "./Components/UserTable";

const UserList: React.FC = () => {
  // const [loading, setLoading] = useState<Boolean>();
  // const [loading, setLoading] = useState<Boolean>();

  return (
    <UserListContainer>
      <UserTable/>
    </UserListContainer>
  );
};

const UserListContainer = styled.div`
  display: flex;
  flex-grow: 1;
  margin: 24px 0px;
`;

export default UserList;
