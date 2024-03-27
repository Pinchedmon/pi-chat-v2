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
                    tag: existingUser.tag,
                    isAdmin: existingUser.isAdmin
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user){
                return {
                    ...token,
                    id: user.id,
                    username: user.username,
                    tag: user.tag,
                    isAdmin: user.isAdmin
                }
            }
            return token
          },
        async session({ session, user, token }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    username: token.username,
                    tag: token.tag,
                    isAdmin: token.isAdmin
                }
            }
          },
    }
    }
  
    