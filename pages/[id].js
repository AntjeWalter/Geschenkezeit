import { useRouter } from "next/router";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import format from "date-fns/format";
import differenceInCalendarDays from "date-fns/differenceInCalendarDays";
import differenceInYears from "date-fns/differenceInYears";

export default function ProfilePage({ entries }) {
  const router = useRouter();
  const { id } = router.query;
  const currentProfile = entries.find((entry) => entry.id === id);

  const calculateAge = () => {
    const birthDate = currentProfile.birthday;
    const age = differenceInYears(new Date(), new Date(birthDate)) + 1;
    return age;
  };

  const calculateDaysUntilBirthday = () => {};

  return (
    <>
      <Header />
      <StyledName>{currentProfile.name}</StyledName>
      <StyledBirthday>
        <p>Geburtstag: {currentProfile.birthday}</p>
        <p>
          wird {calculateAge()} in {calculateDaysUntilBirthday()} Tagen
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
