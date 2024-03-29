import styled from "styled-components";
import Link from "next/link";
import { BiHomeHeart, BiCalendarHeart, BiBookHeart } from "react-icons/bi";

export default function Footer() {
  return (
    <div>
      <StyledFooter>
        <Link href="/" aria-label="Link zur Geburtstagsliste">
          <BiHomeHeart size="30px" color="white" />
        </Link>
        <Link href="/calendar" aria-label="Link zum Kalender">
          <BiCalendarHeart size="30px" color="white" />
        </Link>
        <Link
          href="/universal-ideas"
          aria-label="Link zu allgemeinen Geschenkideen"
        >
          <BiBookHeart size="30px" color="white" />
        </Link>
      </StyledFooter>
    </div>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  text-align: center;
  background-color: var(--blue);
  color: var(--lightgray);
  padding: 10px;
  width: 100vw;
  max-width: 800px;
`;
