import { useRouter } from "next/router";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { differenceInCalendarDays, differenceInYears, format } from "date-fns";
import useLocalStorageState from "use-local-storage-state";

export default function ProfilePage() {
  const router = useRouter();
  const { id } = router.query;
  const [entries] = useLocalStorageState("entries");
  const currentProfile = entries.find((entry) => entry.id === id);

  const calculateAge = () => {
    const birthDate = currentProfile.birthday;
    const age = differenceInYears(new Date(), new Date(birthDate)) + 1;
    if (age === 1) {
      return <span>1 Jahr alt</span>;
    }
    return <span>{age} Jahre alt</span>;
  };

  function calculateNextBirthday() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const currentDay = now.getDate();
    const birthDate = currentProfile.birthday;
    const birthMonth = birthDate.split("-")[1];
    const birthDay = birthDate.split("-")[2];

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
    const now = new Date();
    const difference = differenceInCalendarDays(nextBirthday, now);
    if (difference === 365) {
      return "heute";
    } else {
      return <span>in {difference} Tagen</span>;
    }
  };

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
          wird {calculateDaysUntilBirthday()} {calculateAge()}
        </p>
      </StyledBirthday>
      <StyledIdeas>
        <h2>Ideen:</h2>
        <p>{currentProfile.ideas}</p>
      </StyledIdeas>
      <Footer />
    </>
  );
}

const StyledName = styled.h1`
  font-family: AppleGothic;
  margin-left: 30px;
  margin-right: 30px;
  border-bottom: 2px solid #fe4a49;
`;

const StyledBirthday = styled.section`
  font-family: AppleGothic;
  margin-left: 30px;
`;

const StyledIdeas = styled.section`
  font-family: AppleGothic;
  margin-top: 50px;
  margin-left: 30px;
`;
