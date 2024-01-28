import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { db } from "./db";
import { compare } from "bcrypt";
import {PrismaAdapter} from "@next-auth/prisma-adapter"

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn:'signin',
    },
    providers: [
        CredentialsProvider({
          name: "Credentials",
              
          credentials: {
            tag: { label: "Тэг", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            if (!credentials?.tag || !credentials?.password){
                return null;
            }

            const existingUser = await db.user.findUnique({
                where: {
                    tag: credentials?.tag
                }
            })
            if (!existingUser){
                return null;
            }

            const passwordMatch = await compare(credentials.password, existingUser.password)
            if (!passwordMatch){
                return null;
            }
            return {
                id: `${existingUser.id}`,
                username: existingUser.username,
                tag: existingUser.tag
            }
        }
        })
      ]
}