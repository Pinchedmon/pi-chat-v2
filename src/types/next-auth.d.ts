import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    id: string,
    username: string;
    tag: string;
    isAdmin: boolean
  }
  interface Session {
    user: User &{
      id: string,
      username: string
      tag: string
      isAdmin: boolean
    }
    token: {
      id: string,
        username: string
        tag: string
        isAdmin: boolean
    }
  }
}