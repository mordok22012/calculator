import styled from "styled-components";

const AuthorDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 10%;
padding: 10px;
background-color: #fff;

`;

const Author = () => {
  return (
    <AuthorDiv>
      <i>Designed and Coded By </i>
      <a 
        style={{color: "#4f772d"}}
        href="https://www.freecodecamp.org/no-stack-dub-sack"
        target="_blank"
        rel="noreferrer"
      >
        Agustin Dorta
      </a>
    </AuthorDiv>
  );
};

export default Author;
