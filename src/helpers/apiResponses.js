import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession, } from "next-auth/next"
import { NextResponse } from "next/server"
import connect from "@/dbConfig/connect"
import User from "@/models/userModel"
connect()
export async function verify(request) {
  const path = request.nextUrl.pathname
  const method = request.method
  const session = await getServerSession(authOptions)
  console.log("-------------PATH AND METHOD", {
    path, method
  })
  if (!session) {
    // console.log("------sesion on backend----")
    return {
      success: false,
      message: "Not Authorized S01",

    }
  } else {
    // console.log("----SESSION DATA backend----,", session)
    const { user } = session
    if (user && user?.id) {
      let userId = user?.id
      let email = user?.email
      // const userData = await User.findOne({ email })
      const userData = await User.findById(userId,{password:0})
      if (!userData) {
        console.log("--------ERROR")
        return {
          success: false,
          message: "Not Authorized A01",

        }

      } else {
        // console.log("---------user data",userData)
        return {
          success: true,
          message: "success",
          data: userData

        }
      }
    }
    console.log

    return { autorized: true, session }
  }

}

export async function sessionCheck(data) {
  console.log("---data", data)

  return
}
export async function successResponseWithMessage(res, success, msg) {
  return res.json(
    {
      message: msg,
      status: 200,
      success,
    },
    {
      status: 200,
    }
  );
}

export async function successResponseWithData(
  res,
  success,
  message,
  data = {}
) {
  return res.json(
    {
      message,
      status: 200,
      success,
      data,
    },
    {
      status: 200,
    }
  );
}

export async function unauthorizedError(res, message) {
  return (
    res.json({
      message,
      success,
      status: 401,
    }),
    {
      status: 401,
    }
  );
}

export async function badRequest(res, message) {
  return res.json(
    {
      message,
      status: 400,
    },
    {
      status: 400,
    }
  );
}

export async function serverError(res, message) {
    message=message?message:"INTERNAL SERVER ERROR"
  return res.json(
    {
      message,
      status: 500,
    },
    {
      status: 500,
    }
  );
}
