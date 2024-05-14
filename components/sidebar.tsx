import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
  MdManageAccounts,
  MdOutlineManageHistory,
  MdAllInbox

} from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { AiOutlineAudit } from "react-icons/ai";

export default function Sidebar() {
    return (
        <div className="bg-white">
      <Disclosure as="nav">
        {/* <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg- hp_navy_blue hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group"> */}
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        {/* </Disclosure.Button> */}
        <div className="p-6 w-1/2 h-screen bg-white z-10 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start" >
            <img src="https://hassemprag.com/wp-content/uploads/2023/09/Group-57.svg" alt="Hassam"/>
            <div className=" my-9 border-b border-gray-100 ">
              <div className="flex mb-4 justify-start items-center gap-4 pl-5 hover:bg-hp_navy_blue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold " >
                  Dashboard
                </h3>
              </div>
              <div className="flex  mb-4 justify-start items-center gap-4 pl-5 hover:bg-hp_navy_blue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <FaUser className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Manage Users
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-hp_navy_blue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdManageAccounts className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Manage Accounts
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-hp_navy_blue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <FaUser className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Manage Customers
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-hp_navy_blue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <AiOutlineAudit className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Manage Audit
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-hp_navy_blue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineManageHistory className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                 History
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-hp_navy_blue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdAllInbox className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Inbox
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-hp_navy_blue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdAllInbox className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Batch Jobs
                </h3>
              </div>
            </div>
            {/* setting  */}
            <div className="border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-hp_navy_blue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Settings
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-hp_navy_blue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  More
                </h3>
              </div>
            </div>
            {/* logout */}
            <div className=" my-11 mb-2">
              <div className="flex  justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-hp_navy_blue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Logout
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
    )
}