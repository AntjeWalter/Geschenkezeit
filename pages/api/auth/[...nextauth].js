import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const providers = [
  CredentialsProvider({
    name: "Credentials",
    credentials: {
      username: { label: "Benutzername", type: "text" },
      password: { label: "Passwort", type: "password" },
    },
    async authorize(credentials) {
      if (
        credentials.username === "Geburtstagskind" &&
        credentials.password === "Geburtstagskind"
      ) {
        return {
          name: "Test-Geburtstagskind",
          email: "Geburtstagskind@example.com",
        };
      } else {
        return null;
      }
    },
  }),
  GithubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
  }),
];

export const authOptions = {
  providers,
  secret: process.env.NEXT_PUBLIC_SECRET,
};

export default NextAuth(authOptions);
