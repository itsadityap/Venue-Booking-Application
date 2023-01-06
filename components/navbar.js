import React, { Fragment } from 'react'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { Popover } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Navbar = () => {

  const scrollPosition = useScrollPosition()
  return (
    <Fragment>
        <Popover className = {classNames(scrollPosition > 0 ? 'shadow-md' : 'shadow-none', 'transition-shadow sticky bg-white top-0 z-10')}>
        <div className="mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                  <div className="h-10 w-auto sm:h-10 top-[-18px]">
                    <Image
                      width={50}
                      height={100}
                      src="/logo.jpg"
                      alt="Logo"
                    />
                  </div>
              </Link>
              <div className='pl-5 text-2xl tracking-tight font-bold text-gray-900 sm:text-3xl md:text-5xl'>
                  Venue Booking Portal
              </div>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <Link href={`/login`}>
                <div className="ml-8 whitespace-nowrap cursor-pointer inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-fuchsia-800 hover:bg-fuchsia-600">
                  Log in
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Popover>
      
    </Fragment>
  )
}

export default Navbar