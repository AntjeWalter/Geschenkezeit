import BirthdayEntry from "./BirthdayEntry";
import Lottie from "lottie-react";
import Empty_BirthdayList from "../../public/assets/Empty_BirthdayList.json";
import { Fragment } from "react";
import styled from "styled-components";

export default function BirthdayList({
  entries,
  onUpdateEntry,
  onDelete,
  onMoreInfo,
  onUpdateEntryNotes,
}) {
  return (
    <StyledSection>
      {entries.length === 0 ? (
        <>
          <StyledEmptyState>
            Es sind noch keine Geburtstage gespeichert...
          </StyledEmptyState>
          <Lottie animationData={Empty_BirthdayList} loop={true} />
        </>
      ) : (
        entries.map((entry) => (
          <Fragment key={entry.id}>
            <BirthdayEntry
              id={entry.id}
              name={entry.name}
              birthday={entry.birthday}
              ideas={entry.ideas}
              notes={entry.notes}
              onUpdateEntry={onUpdateEntry}
              onDelete={onDelete}
              onMoreInfo={onMoreInfo}
              onUpdateEntryNotes={onUpdateEntryNotes}
            />
          </Fragment>
        ))
      )}
    </StyledSection>
  );
}

const StyledSection = styled.section`
  margin-top: 20px;
  margin-bottom: 100px;
`;

const StyledEmptyState = styled.p`
  display: block;
  text-align: center;
  margin: 0 20px;
  font-size: 1.1rem;
`;
