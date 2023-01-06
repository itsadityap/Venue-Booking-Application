import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MailIcon } from '@heroicons/react/solid'

const Footer = () => {
  return (
    <footer className="p-4 bg-fuchsia-900 text-slate-50 sm:p-6">
      <div className="max-w-7xl max-auto mx-auto pt-11 px-6 md:px-auto md:pt-26 md:pb-10">
        <div className="w-full flex flex-col md:flex-row md:space-x-5">
          <div
            className="w-full md:w-1/2 flex justify-between flex-col"
          >
            <div className="mb-6 md:mb-0 md:w-1/2">
              <div className='mb-2'>
              <Link href="#">
                <div className="flex items-center pb-6">
                  <Image  
                    width={60}
                    height={60}
                    src="/logo.jpg"
                    alt="Logo"
                  />
                </div>
              </Link>
              </div>
            </div>
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm sm:text-center">
                © 2022 Aditya Pandey
              </span>
            </div>
          </div>

          <div
            className="w-full md:w-1/2"
          >
            <nav className="flex justify-between lg:max-w-2xl mb-8 lg:mb-auto space-x-4 md:space-x-0">

              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase">
                  Contact us
                </h2>
                <div>
                    <Link href="mailto:adityapandey107@gmail.com">
                      <div className="hover:underline block py-1 w-full ">
                        <MailIcon className="w-5 h-5" /> adityapandey107@gmail.com
                      </div>
                    </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer