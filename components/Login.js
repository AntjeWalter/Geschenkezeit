import { useSession, signIn, signOut } from "next-auth/react";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import styled from "styled-components";

export default function Login() {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <StyledLogOutButton onClick={signOut} aria-label="Ausloggen">
          <FiLogOut size="20px" />
        </StyledLogOutButton>
      ) : (
        <>
          <StyledLogInButton onClick={() => signIn()} aria-label="Einloggen">
            <FiLogIn /> Einloggen
          </StyledLogInButton>
          <StyledLogInFooter />
        </>
      )}
    </>
  );
}

const StyledLogInFooter = styled.footer`
  position: fixed;
  text-align: center;
  background-color: #2ab7ca;
  color: #f4f4f8;
  margin-left: -15px;
  padding: 10px;
  width: 100%;
  max-width: 800px;
  height: 50px;
  bottom: 0;
`;

const StyledLogOutButton = styled.button`
  border: none;
  border-radius: 5px;
  margin-right: 0.5rem;
  padding-top: 3px;
  text-align: right;
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
