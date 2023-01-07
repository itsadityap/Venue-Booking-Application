import React, { Fragment } from 'react'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { Popover,Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  function DeleteInactiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="6"
          width="10"
          height="10"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
        <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
        <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
      </svg>
    )
  }
  
  function DeleteActiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="6"
          width="10"
          height="10"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
        <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
        <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
      </svg>
    )
  }

const NavbarPortal = () => {

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
              <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        Name of User
                        <ChevronDownIcon
                        className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-fuchsia-300"
                        aria-hidden="true"
                        />
                    </Menu.Button>
                    </div>  
                    <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                    >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1">
                        <Menu.Item>
                            {({ active }) => (
                            <button
                                className={`${
                                active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                                {active ? (
                                <DeleteActiveIcon
                                    className="mr-2 h-5 w-5 text-violet-400"
                                    aria-hidden="true"
                                />
                                ) : (
                                <DeleteInactiveIcon
                                    className="mr-2 h-5 w-5 text-violet-400"
                                    aria-hidden="true"
                                />
                                )}
                                Logout
                            </button>
                            )}
                        </Menu.Item>
                        </div>
                    </Menu.Items>
                    </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </Popover>
      
    </Fragment>
  )
}

export default NavbarPortal