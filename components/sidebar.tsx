import React, { ReactNode } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineSettings,
  MdOutlineLogout,
  MdManageAccounts,
  MdAllInbox
} from "react-icons/md";
import { FaUsers} from "react-icons/fa";
import { AiOutlineAudit } from "react-icons/ai";
import { RiUser3Fill } from "react-icons/ri";
import { TextSize } from './Enums/TextSize';
import { TextWeight } from './Enums/TextWeight';
import { TextColor } from './Enums/TextColor';

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
    { icon: <MdOutlineSpaceDashboard className={`${TextColor.defaultColor} ${TextSize.xxlText} ${TextColor.hoverTextColor}`} />, label: "Dashboard" },
    { icon: <RiUser3Fill className={`${TextColor.defaultColor} ${TextSize.xxlText} ${TextColor.hoverTextColor}`} />, label: "Manage Users" },
    { icon: <FaUsers className={`${TextColor.defaultColor} ${TextSize.xxlText} ${TextColor.hoverTextColor}`} />, label: "Manage Customers" },
    { icon: <MdManageAccounts className={`${TextColor.defaultColor} ${TextSize.xxlText} ${TextColor.hoverTextColor}`} />, label: "Manage Account" },
    { icon: <AiOutlineAudit className={`${TextColor.defaultColor} ${TextSize.xxlText} ${TextColor.hoverTextColor}`} />, label: "Manage Audit" },
    { icon: <MdAllInbox className={`${TextColor.defaultColor} ${TextSize.xxlText} ${TextColor.hoverTextColor}`} />, label: "Batch Jobs" },
  ];

  // Settings items
  const settingsItems = [
    { icon: <MdOutlineSettings className={`${TextColor.defaultColor} ${TextSize.xxlText} ${TextColor.hoverTextColor}`} />, label: "Settings" },

  ];

  return (
    <div className="bg-white">
      <Disclosure as="nav">
        <GiHamburgerMenu className="block md:hidden h-6 w-6" aria-hidden="true" />
        <div className="p-6 w-1/2 h-screen bg-white  fixed top-0 -left-96 lg:left-0 lg:w-60 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start">
            <img src="https://hassemprag.com/wp-content/uploads/2023/09/Group-57.svg" alt="Hassam" />
            <h2 className={`${TextColor.hpDarkGreen} ${TextSize.xlText} ${TextColor.hoverTextColor} ${TextWeight.boldText} my-10`}>General</h2>
            <div className="my-1 border-b border-gray-100">
              {menuItems.map((item, index) => (
                <SidebarItem key={index} icon={item.icon} label={item.label} />
              ))}
            </div>
            <div className=" border-gray-100 ">
            <h2 className={`${TextColor.hpDarkGreen} ${TextSize.xlText} ${TextColor.hoverTextColor} ${TextWeight.boldText} my-5`}>Other</h2>
              {settingsItems.map((item, index) => (
                <SidebarItem key={index} icon={item.icon} label={item.label} />
              ))}
            </div>
            <div className="absolute bottom-0 mt-20">
              <SidebarItem
                icon={<MdOutlineLogout className={`${TextColor.defaultColor} ${TextSize.xxlText} ${TextColor.hoverTextColor}`} />}
                label="Logout"
              />
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}
