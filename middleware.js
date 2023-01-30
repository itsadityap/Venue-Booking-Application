import * as jose from 'jose'
import { NextResponse } from 'next/server'

const secret = process.env.SECRET

export default function middleware(req){

    const cookie = req?.cookies?.get('jwt');
    const url = req.nextUrl.href;
    let userType = ''

    if(!cookie)
    {
        const url = req.nextUrl.clone()
        url.pathname = '/login'
        return NextResponse.redirect(url);
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
                const url = req.nextUrl.clone()
                url.pathname = '/login'
                return NextResponse.redirect(url);
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
                const url = req.nextUrl.clone()
                url.pathname = '/login'
                return NextResponse.redirect(url);
            }
        }
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboardRequester/(.*)','/dashboardApprover/(.*)']
}