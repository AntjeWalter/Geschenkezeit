import BirthdayList from "../components/BirthdayList";
import Header from "../components/Header";
import Input from "../components/Input";
import styled from "styled-components";
import { useState } from "react";

export default function Home() {
  const [entries, setEntries] = useState([]);

  function handleCreateEntry(newEntry) {
    setEntries([...entries, newEntry]);
  }

  return (
    <>
      <Header />
      <StyledHeading>Geburtstage</StyledHeading>
      <BirthdayList />
      <Input onCreateEntry={handleCreateEntry} />
    </>
  );
}

const StyledHeading = styled.h2`
  font-family: AppleGothic;
  margin-left: 30px;
  margin-right: 30px;
  border-bottom: 2px solid #fe4a49;
`;
