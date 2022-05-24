import UserList from "./Pages/User/UserList";

import styled from "styled-components";
import dayJs from "dayjs";

const customParseFormat = require("dayjs/plugin/customParseFormat");
dayJs.extend(customParseFormat);

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
  max-width: 1024px;
`;

export default App;
