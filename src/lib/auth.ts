import { db } from "@/lib/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {   
    adapter: PrismaAdapter(db),
    session: {
    strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/signin',
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
                    console.log(1)
                    return null;
                }

                const existingUser = await db.user.findUnique({
                    where: {
                        tag: credentials?.tag
                    }
                })
                if (!existingUser){
                    console.log(2)
                    return null;
                }

                const passwordMatch = await compare(credentials.password, existingUser.password)
                if (!passwordMatch){
                    console.log(3)
                    return null;
                }
                return {
                    id: `${existingUser.id}`,
                    username: existingUser.username,
                    tag: existingUser.tag
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user){
                return {
                    ...token,
                    username: user.username,
                    tag: user.tag
                }
            }
            return token
          },
        async session({ session, user, token }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    username: token.username,
                    tag: token.tag
                }
            }
          },
    }
    }
  
    