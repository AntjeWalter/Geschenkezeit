import UniversalIdeaEntry from "../../components/UniversalIdeasPage/UniversalIdeaEntry";
import Lottie from "lottie-react";
import Empty_State from "../../public/assets/Empty_State.json";
import styled from "styled-components";
import { Fragment } from "react";

export default function UniversalIdeasList({
  ideas,
  entries,
  onUpdateIdea,
  onDeleteIdea,
  onIdeaAssign,
}) {
  return (
    <StyledIdeaList>
      {ideas.length === 0 ? (
        <>
          <StyledEmptyState>Hier fehlt es noch an Ideen...</StyledEmptyState>
          <Lottie animationData={Empty_State} loop={true} />
        </>
      ) : (
        ideas.map((idea) => (
          <Fragment key={idea.id}>
            <UniversalIdeaEntry
              idea={idea.idea}
              onUpdateIdea={onUpdateIdea}
              onDeleteIdea={onDeleteIdea}
              onIdeaAssign={onIdeaAssign}
              id={idea.id}
              entries={entries}
            />
          </Fragment>
        ))
      )}
    </StyledIdeaList>
  );
}

const StyledEmptyState = styled.p`
  text-align: center;
  font-size: 1.1rem;
`;

const StyledIdeaList = styled.section`
  margin-bottom: 130px;
`;
