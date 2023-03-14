import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layouts";
import Orb from "./components/Orb/Orb";
function App() {
  return (
    <AppStyled bg={bg} className="App">
      <Orb />
      <MainLayout></MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  background-image: url(${(props) => props.bg});
  height: 100vh;
  position: relative;
`;

export default App;