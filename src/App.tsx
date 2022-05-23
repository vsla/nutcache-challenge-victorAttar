import UserList from "./Pages/User/UserList";

import styled from "styled-components";

function App() {
  return (
    <Container>
      <UserList />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
`;

export default App;

