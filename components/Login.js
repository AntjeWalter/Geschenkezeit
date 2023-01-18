import { useSession, signIn, signOut } from "next-auth/react";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import styled from "styled-components";

export default function Login() {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <StyledLogOutButton onClick={signOut} aria-label="Log out">
          <FiLogOut size="20px" />
        </StyledLogOutButton>
      ) : (
        <>
          <StyledLogInButton
            onClick={() => signIn("github")}
            aria-label="Log in"
          >
            <FiLogIn /> Einloggen
          </StyledLogInButton>
          <StyledLogInFooter />
        </>
      )}
    </>
  );
}

const StyledLogInFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  text-align: center;
  background-color: #2ab7ca;
  color: #f4f4f8;
  margin-block: 0px;
  padding: 10px;
  width: 100vw;
  height: 50px;
  max-width: 800px;
  position: fixed;
  bottom: 0;
  left: 0;
`;

const StyledLogOutButton = styled.button`
  border: none;
  border-radius: 5px;
  padding-top: 3px;
  text-align: right;
  margin-right: 0.5rem;
  position: absolute;
  top: 25px;
  right: 5px;
`;

const StyledLogInButton = styled.button`
  position: absolute;
  top: 90px;
  right: 20px;
  background-color: #fed766;
  border: none;
  border-radius: 3px;
  padding: 5px;
  font-size: 1rem;
`;
