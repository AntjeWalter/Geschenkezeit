import Footer from "../components/Footer";
import Header from "../components/Header";
import IdeasForm from "../components/UniversalIdeasPage/IdeasForm";
import UniversalIdeas from "../components/UniversalIdeasPage/UniversalIdeas";
import styled from "styled-components";
import { useState, useEffect, Fragment } from "react";

export default function UniversalIdeasPage({ entries, onIdeaAssign }) {
  const [ideas, setIdeas] = useState([]);

  async function getIdeas() {
    const response = await fetch("/api/ideas");
    const ideasList = await response.json();
    setIdeas(ideasList);
  }

  useEffect(() => {
    getIdeas();
  }, []);

  async function handleCreateIdea(newIdea) {
    await fetch("/api/ideas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newIdea),
    });
    getIdeas();
  }

  async function handleUpdateIdea(editedIdea, id) {
    await fetch("/api/ideas/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedIdea),
    });
    getIdeas();
  }

  async function handleDeleteIdea(id) {
    if (confirm(`Möchtest du diese Idee löschen?`)) {
      await fetch("/api/ideas/" + id, {
        method: "DELETE",
      });
    }
    getIdeas();
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
      <StyledFooter>
        <IdeasForm onCreateIdea={handleCreateIdea} />
        <Footer />
      </StyledFooter>
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

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
`;
