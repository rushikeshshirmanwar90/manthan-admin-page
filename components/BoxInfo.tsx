"use client";
import React, { useEffect, useState } from "react";
import {
  BsFillCalendarCheckFill,
  BsFillPeopleFill,
  BsFillCartCheckFill,
} from "react-icons/bs";
import { domain } from "./route/route";
import { MdOutlineHandshake } from "react-icons/md";

// importing UserProps Interface
import { userProps } from "@/interface/user";
import { BiSolidBuildingHouse } from "react-icons/bi";

const BoxInfo: React.FC = () => {  
  const [totalLeads, setTotalLeads] = useState<number>(0);
  const [totalUser, setTotalUser] = useState<number>(0);
  const [totalFlats, setTotalFlats] = useState<number>(0);
  const [totalChannelPartner, setTotalChannelPartner] = useState<number>(0);
  const [totalStaff, setTotalStaff] = useState<number>(0);

  // Loading States
  const [leadLoading, setLeadLoading] = useState<boolean>(true);
  const [userLoading, setUserLoading] = useState<boolean>(true);
  const [flatsLoading, setFlatsLoading] = useState<boolean>(true);

  // GETTING THE TOTAL LEADS
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${domain}/api/leads`);
      const data = await res.json();

      const total = data.data.length;

      setTotalLeads(total);
      setLeadLoading(false);
    };
    getData();
  }, [leadLoading]);

  // GETTING TOTAL-USER, TOTAL-CHANNEL-PARTNER, TOTAL STAFF
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${domain}/api/user-ids`);
      const data = await res.json();

      const allUsers: userProps[] = data.data;

      const userData = allUsers.filter(
        (item) => item.attributes.user_type === "user"
      );

      const channelPartnerData = allUsers.filter(
        (item) => item.attributes.user_type === "broker"
      );

      const staffData = allUsers.filter(
        (item) => item.attributes.user_type == "staff"
      );

      const totalUser = userData.length;
      const totalChannelPartner = channelPartnerData.length;
      const totalStaff = staffData.length;
      setTotalUser(totalUser);
      setTotalChannelPartner(totalChannelPartner);
      setTotalStaff(totalStaff);
      setUserLoading(false);
    };
    getData();
  }, [userLoading]);

  // GETTING TOTAL FLATS
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${domain}/api/flats`);
      const data = await res.json();
      const total = data.data.length;
      setTotalFlats(total);
      setFlatsLoading(false);
    };
    getData();
  }, [flatsLoading]);

  return (
    <ul className="box-info grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 mt-8">
      <li className="flex items-center bg-white p-4 rounded-lg shadow-md">
        <div className="p-4 bg-blue-100 rounded">
          <BsFillCalendarCheckFill size={24} className="text-blue-600" />
        </div>

        <div className="ml-4">
          <h3 className="text-2xl font-semibold">{totalUser}</h3>
          <p className="text-gray-600">Total Users</p>
        </div>
      </li>

      <li className="flex items-center bg-white p-4 rounded-lg shadow-md">
        <div className="bg-yellow-100 rounded p-4">
          <BsFillPeopleFill size={24} className="text-yellow-600" />
        </div>

        <div className="ml-4">
          <h3 className="text-2xl font-semibold">{totalLeads}</h3>
          <p className="text-gray-600">Total Leads</p>
        </div>
      </li>

      <li className="flex items-center bg-white p-4 rounded-lg shadow-md">
        <div className="bg-orange-100 p-4 rounded">
          <MdOutlineHandshake size={24} className="text-orange-600" />
        </div>

        <div className="ml-4">
          <h3 className="text-2xl font-semibold"> {totalChannelPartner} </h3>
          <p className="text-gray-600"> Total Channel Partner</p>
        </div>
      </li>

      <li className="flex items-center bg-white p-4 rounded-lg shadow-md">
        <div className="bg-slate-100 p-4 rounded">
          <BsFillCartCheckFill size={24} className="text-slate-600" />
        </div>

        <div className="ml-4">
          <h3 className="text-2xl font-semibold"> {totalStaff} </h3>
          <p className="text-gray-600"> Total Staff</p>
        </div>
      </li>

      <li className="flex items-center bg-white p-4 rounded-lg shadow-md">
        <div className="bg-green-100 p-4 rounded">
          <BiSolidBuildingHouse size={24} className="text-green-600" />
        </div>

        <div className="ml-4">
          <h3 className="text-2xl font-semibold"> {totalFlats} </h3>
          <p className="text-gray-600"> Total Flats</p>
        </div>
      </li>
    </ul>
  );
};

export default BoxInfo;