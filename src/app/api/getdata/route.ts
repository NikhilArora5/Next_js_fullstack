import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest){

console.log("-----------GET DATA RUNNIGN")

    return NextResponse.json({
        message:"send data"
    },{status:200})
}