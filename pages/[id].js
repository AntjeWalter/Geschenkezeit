import { useRouter } from "next/router";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MoreInfoForm from "../components/ProfilePage/MoreInfoForm";
import MoreIdeasForm from "../components/ProfilePage/MoreIdeasForm";
import { differenceInCalendarDays, differenceInYears, format } from "date-fns";
import birthdayCalculation from "../helpers/birthdayCalculation";

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

  const nextBirthday = birthdayCalculation(currentProfile);

  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentDay = now.getDate();
  const birthMonth = currentProfile.birthday.split("-")[1];
  const birthDay = currentProfile.birthday.split("-")[2];

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
    const age =
      differenceInYears(new Date(), new Date(currentProfile.birthday)) + 1;
    return age;
  };
  const age = calculateAge();

  return (
    <>
      <Header />
      <StyledName>{currentProfile.name}</StyledName>
      <StyledBirthday>
        <p>
          Geburtstag: {format(new Date(currentProfile.birthday), "dd.MM.yyyy")}
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
