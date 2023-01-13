import styled from "styled-components";
import Link from "next/link";
import { BiHomeHeart, BiCalendarHeart, BiBookHeart } from "react-icons/bi";

export default function Footer() {
  return (
    <div>
      <StyledFooter>
        <Link href="/">
          <BiHomeHeart size="30px" color="white" />
        </Link>
        <Link href="/calendar">
          <BiCalendarHeart size="30px" color="white" />
        </Link>
        <Link href="/universal-ideas">
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
  background-color: #2ab7ca;
  color: #f4f4f8;
  margin-block: 0px;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100vw;
  max-width: 800px;
`;
