import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import { signIn } from "next-auth/react";
import { pages } from "next/dist/build/templates/app-page";

export const NEXT_AUTH = ({
    providers: [
      CredentialsProvider({
        name: "Email",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "email" },
          password: {
            label: "Password",
            type: "password",
            placeholder: "password",
          },
        },
        async authorize(credentials: any) {
          console.log(credentials);
          //validate the credentials from the database
          return {
            id: "user1",
            email: "jaya@gmail.com",
          };
        },
      }),
        GitHubProvider({
          clientId: process.env.GITHUB_ID || "",
          clientSecret: process.env.GITHUB_SECRET || ""
        })
      ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      signIn: ({ user }:any) => {
        if (user.email == "randomperson@gmail.com") {
          return false;
        }
        return true;
      },
      jwt: ({ token, user }:any) => {
        console.log(token);
        return token;
      },
      session: ({ token, session, user }: any) => {
        console.log(session)
        if (session && session.user) {
          session.user.id = token.sub;
        }
        return session;
      },
    },
    pages:{
        signIn: "/signin"
    }
  })