import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
} from "../redux/calculatorSlices/slices";

const Button = styled.button`
  padding: 20px;
  font-size: 20px;
  text-align: center;
  color: #fff;
  background: ${(props) => props.$background || "#90a955"};
  height: ${(props) => props.height || "auto"};
  grid-column: ${(props) => props.$gridcolumn || "auto"};
  grid-row: ${(props) => props.$gridrow || "auto"};

  &:hover {
    border: 1px solid #fff;
    color: #333;
  }
`;

const KeypadDiv = styled.div`
  height: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: #e0ffff;
  margin: 5px;
`;

const Keypad = () => {
  const dispatch = useDispatch();

  return (
    <KeypadDiv>
      <Button 
      $background="#31572c" 
      $gridcolumn="1/ 3" 
      id="clear" 
      value="AC"
      onClick={() => {dispatch(reset())}}>
        AC
      </Button>
      <Button $background="#4f772d" id="divide" value="/">
        /
      </Button>
      <Button $background="#4f772d" id="multiply" value="x">
        x
      </Button>
      <Button id="seven" value="7">
        7
      </Button>
      <Button id="eight" value="8">
        8
      </Button>
      <Button id="nine" value="9">
        9
      </Button>
      <Button $background="#4f772d" id="subtract" value="-">
        -
      </Button>
      <Button id="four" value="4">
        4
      </Button>
      <Button id="five" value="5">
        5
      </Button>
      <Button id="six" value="6">
        6
      </Button>
      <Button 
      $background="#4f772d" 
      id="add" 
      value="+"
      onClick={() => {dispatch(increment())}}>
        +
      </Button>
      <Button id="one" value="1">
        1
      </Button>
      <Button id="two" value="2">
        2
      </Button>
      <Button id="three" value="3">
        3
      </Button>
      <Button $gridcolumn="1 / 3" id="zero" value="0">
        0
      </Button>
      <Button id="decimal" value=".">
        .
      </Button>
      <Button
        $gridrow="4 / 6"
        $gridcolumn="4 / 5"
        height="100%"
        $background="#4f772d"
        id="equals"
        value="="
      >
        =
      </Button>
    </KeypadDiv>
  );
};

export default Keypad;
export { Button };
