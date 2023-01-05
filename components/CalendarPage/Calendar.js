import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

export default function CalendarFromReact({ entries }) {
  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const selectedDay = date.getDate();
      const selectedMonth = date.getMonth() + 1;

      const hasBirthday = entries.find((entry) => {
        const birthDay = entry.birthday.split("-")[2];
        const birthMonth = entry.birthday.split("-")[1];
        return selectedDay == birthDay && selectedMonth == birthMonth;
      });

      if (hasBirthday) {
        return <p>🎁</p>;
      }
    }
  };

  return (
    <StyledCalendarContainer>
      <Calendar locale="de-DE" tileContent={tileContent} />
    </StyledCalendarContainer>
  );
}

const StyledCalendarContainer = styled.section`
  margin: 8vw;
  button {
    margin: 2px;
    background-color: #e6e6ea;
    border-radius: 3px;
  }
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.7;
  }
  .react-calendar__tile--active:enabled:hover {
    background: #2ab7ca;
  }
  .react-calendar__year-view__months,
  .react-calendar__decade-view__years,
  .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;

    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }

    .react-calendar__tile {
      max-width: initial !important;
    }
  }
`;
