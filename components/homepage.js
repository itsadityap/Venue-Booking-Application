import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Homepage() {
  return (
    <div className="md:flex justify-between py-10 px-6 bg-white-600 text-black-100">
        <div className="md:w-1/2 mb-10 md:mb-0">
            
            <div className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="text-fuchsia-800 xl:inline">Hassle Free Booking</span>{' '}
            </div>

            <div className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Events permission on the go!!</span>
            </div>

            <section id="SignUp Links" className="flex">
                <Link href={'/signupRequester'}>
                  <div className="max-w-sm my-4 md:my-4 sm:my-4 py-4 px-3 md:px-10 md:py-5 bg-fuchsia-800 text-indigo-50 hover:bg-fuchsia-400 rounded-md font-semibold">
                    Signup as a Requester
                  </div>
                </Link>
                <Link href={'/signupApprover'}>
                  <div className="max-w-sm my-4 md:my-4 sm:my-4 py-4 px-3 mx-3 md:px-10 md:py-5 bg-indigo-100 text-fuchsia-800 hover:bg-fuchsia-400 rounded-md font-semibold">
                    Signup as an Approver
                  </div>
                </Link>
            </section>
            </div>
            <div className="md:w-1/3 w-full rounded object-none">
              <Image
                src="/Stock1.png"
                height={500}
                width={500}
                className=" h-500 w-500"
                alt="Calendar Image for Homepage Vector"
              />
            </div>
      </div>
  )
}

export default Homepage