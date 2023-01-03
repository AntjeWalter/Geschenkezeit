import { useRouter } from "next/router";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MoreInfoForm from "../components/ProfilePage/MoreInfoForm";
import MoreIdeasForm from "../components/ProfilePage/MoreIdeasForm";
import { differenceInCalendarDays, differenceInYears, format } from "date-fns";

export default function ProfilePage({
  entries = [],
  onUpdateEntryNotes,
  onUpdateIdeas,
}) {
  const router = useRouter();
  const { id } = router.query;

  if (!entries) {
    return null;
  }

  const currentProfile = entries.find((entry) => entry.id === id);

  if (!currentProfile) {
    return null;
  }

  const birthDate = currentProfile.birthday;
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  const currentDay = now.getDate();
  const birthMonth = birthDate.split("-")[1];
  const birthDay = birthDate.split("-")[2];

  function calculateNextBirthday() {
    if (currentMonth <= birthMonth && currentDay < birthDay) {
      const nextBirthday = new Date(
        currentYear,
        birthDate.split("-")[1] - 1,
        birthDate.split("-")[2]
      );
      return nextBirthday;
    } else {
      const nextBirthday = new Date(
        currentYear + 1,
        birthDate.split("-")[1] - 1,
        birthDate.split("-")[2]
      );
      return nextBirthday;
    }
  }

  const nextBirthday = calculateNextBirthday();

  const calculateDaysUntilBirthday = () => {
    const difference = differenceInCalendarDays(nextBirthday, now);
    if (difference === 365) {
      return <span>wird heute</span>;
    } else if (difference === 1) {
      return <span>wird morgen</span>;
    } else {
      return <span>wird in {difference} Tagen</span>;
    }
  };

  const calculateAge = () => {
    const age = differenceInYears(new Date(), new Date(birthDate)) + 1;
    return age;
  };
  const age = calculateAge();

  return (
    <>
      <Header />
      <StyledName>{currentProfile.name}</StyledName>
      <StyledBirthday>
        <p>
          Geburtstag:{" "}
          {format(new Date(currentProfile.birthday), "dd'.'MM'.'yyyy")}
        </p>
        <p>
          {calculateDaysUntilBirthday()}{" "}
          {currentMonth == birthMonth && currentDay == birthDay ? age - 1 : age}
          {age - 1 === 1 ? ` Jahr alt` : ` Jahre alt`}
        </p>
      </StyledBirthday>
      <MoreInfoForm
        personId={id}
        currentProfile={currentProfile}
        onUpdateEntryNotes={onUpdateEntryNotes}
      />
      <MoreIdeasForm
        currentProfile={currentProfile}
        personId={id}
        onUpdateIdeas={onUpdateIdeas}
      />
      <Footer />
    </>
  );
}

const StyledName = styled.h1`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  border-bottom: 2px solid #fe4a49;
`;

const StyledBirthday = styled.section`
  margin-left: 1.5rem;
`;
