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
        href="linkedin.com/in/joel-agustín-dorta-49b153216"
        target="_blank"
        rel="noreferrer"
      >
        Agustin Dorta
      </a>
    </AuthorDiv>
  );
};

export default Author;
