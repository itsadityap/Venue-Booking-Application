import * as jose from 'jose'
import { NextResponse } from 'next/server'

const secret = process.env.SECRET

export default function middleware(req){

    const cookie = req?.cookies?.get('jwt');
    const url = req.nextUrl.href;
    let userType = ''

    if(!cookie)
    {
        let uri = 'http://localhost:3000/login'
        return NextResponse.redirect(uri);
    }
    if(cookie?.value)
    {
        const dec = jose.decodeJwt(cookie?.value, secret)
        userType = dec?.userType

        if(url.includes('dashboardRequester'))
        {
            if(userType === 'User')
            {
                return NextResponse.next()
            }
            else
            {
                let uri = 'http://localhost:3000/login'
                return NextResponse.redirect(uri);
            }
        }
        else
        {
            if(userType === 'Reviewer')
            {
                return NextResponse.next()
            }
            else
            {
                let uri = 'http://localhost:3000/login'
                return NextResponse.redirect(uri);
            }
        }
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboardRequester/(.*)','/dashboardApprover/(.*)']
}