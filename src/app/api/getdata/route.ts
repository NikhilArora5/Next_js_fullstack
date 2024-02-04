import { NextRequest, NextResponse } from "next/server";

import {getServerSession} from "next-auth/next";
import connect from "@/dbConfig/connect";
// import { getSession } from "next-auth/client"
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {badRequest, successResponseWithData} from "@/helpers/apiResponses";
import {verify} from "@/helpers/apiResponses";
export async function GET(request:NextRequest){
  let {success, data, message} = await verify(request);
  if (!success) {
    return badRequest(NextResponse, message);
  }

  console.log("-------DATA", data);

  const req = request.nextUrl;

  return successResponseWithData(NextResponse,true,"data fetched success",data)
}