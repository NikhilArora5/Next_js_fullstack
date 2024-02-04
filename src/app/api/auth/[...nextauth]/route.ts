import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextRequest, NextResponse } from "next/server";
import {successResponseWithMessage,successResponseWithData,badRequest,serverError} from "@/helpers/apiResponses"
import {verify,sessionCheck} from "@/helpers/apiResponses"
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          if(email=="admin@gm.com" && password=="123456"){
            let user={
              email,
              name:"Nikhil",
              role:"user",
              user_id:"65b4af94fc46f004ccaa8327"
            }
            user["role"]="onlyuser"
           return user
           }
    
          //  return badRequest(NextResponse,"User does not exist m")
           return null
          // throw new Error('custom error to the client')
        } catch (error) {
          console.log("Error: ", error);
        }
      },
     
    }),
  ],
  callbacks: {
    async jwt({token,user,account}) {
     // Persist the OAuth access_token and or the user id to the token right after signin
   
     if(user){
      token.role=user.role
      token.id=user.user_id
     }
  
    //  console.log("TOKEN",token)

    return token
   },
   async session({ session, token }) {
    
     session.user.role = token.role
     session.user.id=token.id
     return session
   },
  //  async signIn({ user, account, profile, email, credentials }) 
  //     {
  //     if(user?.error === 'my custom error') {
  //        throw new Error('custom error dddd to the client')
  //     }
  //     return null
  //  }
 },
  session: {
    strategy: "jwt",
  },
  secret:"abcsecret",
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
