import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    username: string;
    tag: string;
  }
  interface Session {
    user: User &{
      username: string
      tag: string
    }
    token: {
        username: string
        tag: string
    }
  }
}