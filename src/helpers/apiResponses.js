export async function successResponseWithMessage(res,msg){

    return res.json({
        message:msg,
        status:200
    })

}

export async function successResponseWithData(res,message,data={}){

    return res.json({
        message,
        status:200,
        data
    })

}

export async function unauthorizedError(res,message){

    return res.json({
        message,
        status:401,
    })

}


export async function badRequest(res,message){

    return res.json({
        message,
        status:403,
    })

}