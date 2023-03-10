import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
  MdDoneOutline,
  MdPendingActions,
  MdOutlineLogout,
} from "react-icons/md";
import { IoMdListBox } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/router";

function SideNavbar() {

  const router = useRouter();
    const logoutHandler = () => {

      if(typeof window !== 'undefined')
      {
          document.cookie = 'jwt' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      }
      router.push('/login');
  }
  const pagePresent2 = router.pathname.includes('dashboardApprover/pending');
  const pagePresent3 = router.pathname.includes('dashboardApprover/approved');
  const pagePresent4 = router.pathname.includes('dashboardApprover/all');

  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-neutral-200 z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:l
        eft-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
              Venue Booking Portal
            </h1>
            <div className=" my-4 border-b border-gray-100 pb-4">
            {
                (
                  <div className={`${pagePresent2 === true ? 'flex mb-2 justify-start items-center gap-4 pl-5 bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto': 'flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'}`}>
                    <MdPendingActions className={`${pagePresent2 === true ? 'text-2xl text-white' :'text-gray-600 text-2xl group-hover:text-white'}`}/>
                    <Link href="/dashboardApprover/pending">
                    <h3 className={`${pagePresent2 === true?'text-base text-white font-semibold': 'text-base text-gray-600 group-hover:text-white'}`}>
                      Pending Requests
                    </h3>
                    </Link>
                  </div>
                )
              }
              {
                (
                  <div className={`${pagePresent3 === true ? 'flex mb-2 justify-start items-center gap-4 pl-5 bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto': 'flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'}`}>
                    <MdDoneOutline className={`${pagePresent3 === true ? 'text-2xl text-white' :'text-gray-600 text-2xl group-hover:text-white'}`}/>
                    <Link href="/dashboardApprover/approved">
                    <h3 className={`${pagePresent3 === true?'text-base text-white font-semibold': 'text-base text-gray-600 group-hover:text-white'}`}>
                      Approved Requests
                    </h3>
                    </Link>
                  </div>
                )
              }

              {
                (
                  <div className={`${pagePresent4 === true ? 'flex mb-2 justify-start items-center gap-4 pl-5 bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto': 'flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'}`}>
                    <IoMdListBox className={`${pagePresent4 === true ? 'text-2xl text-white' :'text-gray-600 text-2xl group-hover:text-white'}`}/>
                    <Link href="/dashboardApprover/all">
                    <h3 className={`${pagePresent4 === true?'text-base text-white font-semibold': 'text-base text-gray-600 group-hover:text-white'}`}>
                      All Requests
                    </h3>
                    </Link>
                  </div>
                )
              }

            </div>
            <div className=" my-4" onClick={logoutHandler}>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-rose-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white "/>
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Logout
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;