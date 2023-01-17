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

    if(cookie?.value !== undefined)
    {
        try
        {
            const dec = jose.decodeJwt(cookie?.value, secret)
            userType = dec?.userType
        }
        catch(err)
        {
            console.log('err',err);
        }

        if(url.includes('dashboardApprover') || url.includes('dashboardRequester)'))
        {
            if(userType === 'User')
            {
                let uri = 'http://localhost:3000/dashboardRequester/pending'
                return NextResponse.redirect(uri);
            }
            else if(userType === 'Reviewer')
            {
                let uri = 'http://localhost:3000/dashboardApprover/pending'
                return NextResponse.redirect(uri);
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
    matcher: ['/dashboardApprover/:path*','/dashboardRequester/:path*']
}