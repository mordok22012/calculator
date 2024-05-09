import styled from "styled-components";
import DisplayContainer from "./components/display";
import {DivInsideDisplay} from "./components/display";
import Keypad from "./components/keypad.jsx";
import Author from "./components/author.jsx";
import { useSelector} from 'react-redux';


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 60vw;
  margin: 10vh auto;
  background-color: #000814;
  font-size: 1.5rem;

  @media screen and ( min-width: 768px) {
    height: 80%;
    width: 30vw;
    
    
  }

  @media screen and ( min-width: 1024px) {
    height: 80vh;
    width: 40vw;
    
  }
  
`;

function App() {
  const outputScreen = useSelector((state) => state.calculator.outputScreen);
  const formulaScreen = useSelector((state) => state.calculator.formulaScreen);
  return (
    <MainContainer>
      <DisplayContainer>
        <DivInsideDisplay>{formulaScreen}</DivInsideDisplay>
        <DivInsideDisplay>{outputScreen}</DivInsideDisplay>
      </DisplayContainer>
      <Keypad/>
      <Author />   
    </MainContainer>
  );
}

export default App;
