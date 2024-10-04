"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BsPersonFill, BsFillGridFill } from "react-icons/bs";
import Image from "next/image";
import Logo from "@/public/logo.png";

// react icons
import {
  MdLeaderboard,
  MdOutlineHandshake
} from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";
import { BiSolidBuildings } from "react-icons/bi";

const Sidebar: React.FC<{ active: string }> = ({ active }) => {

  const [activeMenu, setActiveMenu] = useState(active);

  return (

    <section className="fixed top-0 left-0 w-72 h-full bg-gray-100 z-50 transition-transform duration-300">
      <div className="brand flex items-center justify-start p-4">

        <Image
          src={Logo}
          alt="Logo"
          width={200}
          height={200}
          className="w-[55px]"
        />

        <span className="text-xl font-bold ml-2">Manthan Infracare</span>
      </div>

      <ul className="side-menu top px-5">

        {[

          { name: "Dashboard", icon: BsFillGridFill, link: "/" },
          { name: "Leads", icon: MdLeaderboard, link: "/leads" },
          { name: "Staff", icon: BsPersonFill, link: "/staff" },
          { name: "Flats", icon: BiSolidBuildings, link: "/flats" },
          { name: "users", icon: PiUsersThreeFill, link: "/users" },
          {
            name: "channel partner",
            icon: MdOutlineHandshake,
            link: "/partner",
          },

        ].map((menu) => (
          <li
            key={menu.name}
            className={`p-2 rounded-lg ${
              activeMenu === menu.name ? "bg-gray-200" : ""
            } mt-4`}
          >
            <Link href={`${menu.link}`}>
              <div
                onClick={() => setActiveMenu(menu.name)}
                className="flex items-center"
              >
                <menu.icon size={15} />
                <span className="ml-4">{menu.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sidebar;