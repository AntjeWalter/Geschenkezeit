import styled from "styled-components";
import Link from "next/link";
import { BiHomeHeart } from "react-icons/bi";

export default function Footer() {
  return (
    <div>
      <StyledFooter>
        <Link href="/">
          <BiHomeHeart size="5vh" color="white" />
        </Link>
      </StyledFooter>
    </div>
  );
}

const StyledFooter = styled.footer`
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
