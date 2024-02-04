import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
 import authMiddleware from "@/helpers/middleware"
//  export { default } from "next-auth/middleware"
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

    const path = request.nextUrl.pathname
    const token=request.cookies.get("token")
    // console.log("------COMMON MIDDLEWARE")

  //   const isPublic=path==="/login"|| path==="/signup"

  //   if(!isPublic && !token){
  //       return NextResponse.redirect(new URL('/login', request.url))
  //   }
  //   if(isPublic && !token){
  //     return NextResponse.redirect(new URL('/', request.url))
  // }
  //   if(!token){

  //     return NextResponse.redirect(new URL('/denied', request.url))
  //   }

    if (path.startsWith("/api")){
      // console.log("--------BACKEND- GET DATA----I AM FROM MIDDLEWARE",path)
      // const res = NextResponse.next()
      // return  await authMiddleware(request,NextResponse)
      // // return res
    }

    

 
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/login',
    '/profile',
    '/signup',
    '/profile/:path*',
    '/api/:path*'
  ],
}