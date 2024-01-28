import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    const path = request.nextUrl.pathname
    const token=request.cookies.get("token")
    console.log("------COMMON MIDDLEWARE")

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

    if (path.startsWith("/api/getdata")){
      console.log("--------BACKEND- GET DATA----I AM FROM MIDDLEWARE",path)
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