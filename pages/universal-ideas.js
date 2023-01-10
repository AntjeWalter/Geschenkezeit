import Footer from "../components/Footer";
import Header from "../components/Header";
import IdeasForm from "../components/UniversalIdeasPage/IdeasForm";
import UniversalIdeas from "../components/UniversalIdeasPage/UniversalIdeas";
import styled from "styled-components";
import { useLocalStorage } from "../helpers/hooks";
import { Fragment } from "react";

export default function UniversalIdeasPage() {
  const [ideas, setIdeas] = useLocalStorage("ideas", []);

  function handleCreateIdea(newIdea) {
    setIdeas([...ideas, newIdea]);
  }

  function handleUpdateIdea(editedIdea, id) {
    setIdeas(
      ideas.map((idea) => {
        if (idea.id === editedIdea.id) {
          return editedIdea;
        } else {
          return idea;
        }
      })
    );
  }

  function handleDeleteIdea(id) {
    const updatedIdea = ideas.filter((idea) => {
      return idea.id !== id;
    });
    setIdeas([...updatedIdea]);
  }

  console.log("ideas", ideas);
  return (
    <>
      <Header />
      <StyledHeading>Allgemeine Geschenkideen</StyledHeading>
      {ideas.map((idea) => (
        <Fragment key={idea.id}>
          <UniversalIdeas
            idea={idea}
            onUpdateIdea={handleUpdateIdea}
            onDeleteIdea={handleDeleteIdea}
            id={idea.id}
          />
        </Fragment>
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
