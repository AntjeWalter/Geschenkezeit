import Footer from "../components/Footer";
import Header from "../components/Header";
import IdeasForm from "../components/UniversalIdeasPage/IdeasForm";
import UniversalIdeas from "../components/UniversalIdeasPage/UniversalIdeas";
import styled from "styled-components";
import { useLocalStorage } from "../helpers/hooks";

export default function UniversalIdeasPage() {
  const [ideas, setIdeas] = useLocalStorage("ideas", []);

  function handleCreateIdea(newIdea) {
    setIdeas([...ideas, newIdea]);
  }
  console.log(ideas);
  return (
    <>
      <Header />
      <StyledHeading>Allgemeine Geschenkideen</StyledHeading>
      {ideas.map((idea) => (
        <UniversalIdeas idea={idea} />
      ))}
      <IdeasForm onCreateIdea={handleCreateIdea} />
      <Footer />
    </>
  );
}

const StyledHeading = styled.h2`
  margin-left: 30px;
  margin-right: 30px;
  border-bottom: 2px solid #fe4a49;
`;
