import { NextResponse } from "next/server";
import { badRequest } from "@/helpers/apiResponses"
const authMiddleware = async (req, res) => {
    try {
        //    req.headers;
        // const res = NextResponse.next()
        console.log("----------AUthmiddleware running")
        const { token, userToken } = req.cookies
        if (token || userToken) {
            console.log("token", token)
        }
        req.user="nikhil"
        // Token has been expired or we detected a fruad attack
        // return badRequest(res, "badrequest")
        return NextResponse.next()

    } catch (error) {
        console.log("Errore", error.message)
    }
};
export default authMiddleware;