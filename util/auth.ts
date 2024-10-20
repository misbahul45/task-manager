import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import db from "./prisma"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"

 
export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter:PrismaAdapter(db),
  providers: [Google, GitHub],
})