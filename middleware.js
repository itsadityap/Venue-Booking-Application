import jose from 'jose'
import { NextResponse } from 'next/server'

const secret = process.env.SECRET

export default function middleware(req){

    let token;

    if(typeof document !== 'undefined')
    {
        token = document.localStorage.getItem('jwt')
    }
    //console.log(token);

    const url = req.nextUrl.href;
    console.log(url);

    if(url.includes('dashboardApprover') || url.includes('dashboardRequester'))
    {

        if(token === undefined || token === null)
        {
            let uri = 'http://localhost:3000/login'
            return NextResponse.redirect(uri);
        }

        try
        {
            const payload = jose.JWT.verify(jwt,secret,{algorithms: ['HS256']})
            console.log(payload);
            if(payload)
            return NextResponse.next();
        }
        catch(err)
        {
            let uri = 'http://localhost:3000/login'
            return NextResponse.redirect(uri);
        }
    }

    return NextResponse.next();
}
