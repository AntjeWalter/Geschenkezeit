import Footer from "../components/Footer";
import Header from "../components/Header";
import IdeasForm from "../components/UniversalIdeasPage/IdeasForm";
import UniversalIdeas from "../components/UniversalIdeasPage/UniversalIdeas";
import styled from "styled-components";
import { useLocalStorage } from "../helpers/hooks";
import { Fragment } from "react";

export default function UniversalIdeasPage({ entries, onIdeaAssign }) {
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

  return (
    <>
      <Header />
      <StyledHeading>Allgemeine Geschenkideen</StyledHeading>
      <StyledIdeaList>
        {ideas.map((idea) => (
          <Fragment key={idea.id}>
            <UniversalIdeas
              idea={idea.idea}
              onUpdateIdea={handleUpdateIdea}
              onDeleteIdea={handleDeleteIdea}
              onIdeaAssign={onIdeaAssign}
              id={idea.id}
              entries={entries}
            />
          </Fragment>
        ))}
      </StyledIdeaList>

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

const StyledIdeaList = styled.section`
  margin-bottom: 130px;
`;
