import styled from "styled-components";

export default function UniversalIdeas({ idea }) {
  return (
    <>
      <StyledIdeas>{idea}</StyledIdeas>
    </>
  );
}

const StyledIdeas = styled.p`
  margin: auto;
  margin-bottom: 10px;
  width: 90%;
  word-wrap: break-word;
  background-color: #e6e6ea;
  padding: 15px;
  border-radius: 5px;
  align-items: center;
`;
