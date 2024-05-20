import React, { ReactNode } from 'react';
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
import { lableTxt } from './label';

interface SidebarItemProps {
  icon: ReactNode;
  label: string;
}
// Sidebar item component

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label }) => (
  <div className="flex mb-4 justify-start items-center gap-4 pl-5 hover:bg-hpDarkBlue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
    {icon}
    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">{label}</h3>
  </div>
);

export default function Sidebar() {
  // Menu items
  const menuItems = [
    { icon: <MdOutlineSpaceDashboard className="labelTxt"/>, label: "Dashboard" },
    { icon: <FaUser className="text-2xl text-gray-600 group-hover:text-white" />, label: "Manage Users" },
    { icon: <MdManageAccounts className="text-2xl text-gray-600 group-hover:text-white" />, label: "Manage Customers" },
    { icon: <AiOutlineAudit className="text-2xl text-gray-600 group-hover:text-white" />, label: "Manage Audit" },
    { icon: <MdOutlineManageHistory className="text-2xl text-gray-600 group-hover:text-white" />, label: "History" },
    { icon: <MdAllInbox className="text-2xl text-gray-600 group-hover:text-white" />, label: "Inbox" },
    { icon: <MdAllInbox className="text-2xl text-gray-600 group-hover:text-white" />, label: "Batch Jobs" },
  ];

  // Settings items
  const settingsItems = [
    { icon: <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white" />, label: "Settings" },
    { icon: <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-white" />, label: "More" },
  ];

  return (
    <div className="bg-white">

      <Disclosure as="nav">
        <GiHamburgerMenu className="block md:hidden h-6 w-6" aria-hidden="true" />
        <div className="p-6 w-1/2 h-screen bg-white z-10 fixed top-0 -left-96 lg:left-0 lg:w-60 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start">
            <img src="https://hassemprag.com/wp-content/uploads/2023/09/Group-57.svg" alt="Hassam" />
            <div className="my-9 border-b border-gray-100">
              {menuItems.map((item, index) => (
                <SidebarItem key={index} icon={item.icon} label={item.label} />
              ))}
            </div>
            <div className="border-b border-gray-100 pb-4">
              {settingsItems.map((item, index) => (
                <SidebarItem key={index} icon={item.icon} label={item.label} />
              ))}
            </div>
            <div className="my-11 mb-2">
              <SidebarItem
                icon={<MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white" />}
                label="Logout"
              />
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}
