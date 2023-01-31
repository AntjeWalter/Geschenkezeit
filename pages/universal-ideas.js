import Footer from "../components/Footer";
import Header from "../components/Header";
import IdeasForm from "../components/UniversalIdeasPage/IdeasForm";
import styled from "styled-components";
import { useState, useEffect } from "react";
import fetchData from "../helpers/fetchData";
import { useSession } from "next-auth/react";
import UniversalIdeasList from "../components/UniversalIdeasPage/UniversalIdeasList";

export default function UniversalIdeasPage({ entries, onIdeaAssign }) {
  const { data: session } = useSession();
  const [ideas, setIdeas] = useState([]);

  async function getIdeas() {
    const ideasList = await fetchData("/api/ideas");
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
      {session && (
        <>
          <StyledHeading>Allgemeine Geschenkideen</StyledHeading>
          <UniversalIdeasList
            ideas={ideas}
            entries={entries}
            onIdeaAssign={onIdeaAssign}
            onDeleteIdea={handleDeleteIdea}
            onUpdateIdea={handleUpdateIdea}
          />
          <StyledFooter>
            <IdeasForm onCreateIdea={handleCreateIdea} />
            <Footer />
          </StyledFooter>
        </>
      )}
    </>
  );
}

const StyledHeading = styled.h2`
  margin-left: 30px;
  margin-right: 30px;
  border-bottom: 2px solid var(--red);
`;

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
`;
