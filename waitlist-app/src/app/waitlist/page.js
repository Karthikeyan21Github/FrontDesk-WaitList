"use client";
import React from "react";
import { useState } from "react";
import Classes from "./waitlist.module.css";
import {
  FilterIcon,
  ReloadIcon,
  PageIcons,
  DownloadIcon,
  Calendar,
  PersonIcon,
  StatusIcon,
  NumberIcon,
} from "../constants/Icons/SidebarIcons";
import FilterModal from "../../Components/FilterModal";
import EditColumns from "../../Components/EditColumns";
import { users } from "../constants/Variables/AppConstants";

const columns = [
  { name: "Created On", id: "createdOn", icon: <Calendar /> },
  { name: "Payer", id: "payer", icon: <PersonIcon /> },
  { name: "Status", id: "status", icon: <StatusIcon /> },
  { name: "Email", id: "email", icon: <NumberIcon /> },
  { name: "Payer Phone", id: "payerPhone", icon: <NumberIcon /> },
  { name: "Service", id: "service", icon: <NumberIcon /> },
  { name: "Scheduled", id: "scheduled", icon: <Calendar /> },
];
function WaitList() {
  const [visibleColumns, setVisibleColumns] = useState(
    columns.map((obj) => obj.id)
  );
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [tableFilter, setTableFilter] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleSelectAll = (e) => {
    setSelectedUsers(e.target.checked ? users.map((user) => user.id) : []);
  };

  const handleSelectUser = (userId) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const isSelected = (userId) => selectedUsers.includes(userId);

  return (
    <>
      <div className="font-medium text-2xl mt-4 ms-3">Waitlist</div>
      <div className="bg-white rounded-lg pt-2 px-4 font-raleway">
        <div className="flex w-full justify-around space-x-4 mb-4">
          <div className=" w-full p-2 h-[40px] border-[#64748B] border-[1px] rounded-lg">
            All WaitList 100
          </div>
          <div className="w-full p-2 h-[40px] border-[#E2E8F0] border-[1px] rounded-lg">
            Newly Added 50
          </div>
          <div className="w-full p-2 h-[40px] border-[#E2E8F0] border-[1px] rounded-lg">
            Leads 50
          </div>
        </div>
        <div className="flex justify-between my-3">
          <div>
            <FilterModal
              showFilterModal={showFilterModal}
              setShowFilterModal={setShowFilterModal}
            />
            <button
              className={`${Classes["filter-btn"]} px-3 rounded-lg flex justify-between items-center hover:bg-gray-200`}
              onClick={() => {
                setShowFilterModal(true);
              }}
            >
              {/* clicking the button will enable the Modal */}
              <FilterIcon /> <span className="ms-2">Add Filter</span>
            </button>
          </div>
          <div className="flex justify-between">
            <div className="hover:bg-gray-100 rounded-lg cursor-pointer">
              <ReloadIcon />
            </div>
            <div
              className={`relative mx-2 rounded-lg hover:bg-gray-100 cursor-pointer h-[32px] ${
                tableFilter ? "bg-gray-100" : ""
              }`}
              tabIndex={0}
            >
              <button
                className="p-0 m-0"
                onClick={() => {
                  setTableFilter((prev) => !prev);
                }}
              >
                <PageIcons />
              </button>
              <EditColumns
                open={tableFilter}
                setOpen={setTableFilter}
                visibleColumns={visibleColumns}
                setVisibleColumns={setVisibleColumns}
                columns={columns}
              />
            </div>
            <div className="hover:bg-gray-100 rounded-lg cursor-pointer">
              <DownloadIcon />
            </div>
          </div>
        </div>
        <div className="overflow-auto scroll-smooth border-[1px] rounded h-[77vh] mt-3">
          <table className="w-full ">
            <thead>
              <tr className="bg-[#F8FAFC] border-b-[1px] border-[#E2E8F0]">
                <th className="w-[45px]">
                  <input
                    type="checkbox"
                    onChange={(e) => handleSelectAll(e)}
                    className="text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-600 accent-purple-600"
                  />
                </th>
                {columns &&
                  columns.map((obj) => {
                    if (visibleColumns.includes(obj.id)) {
                      return (
                        <th
                          key={obj.id}
                          className="px-3 py-2 text-left text-gray-800 text-sm font-medium"
                        >
                          <span className="flex items-center">
                            {obj.icon}
                            <span className="ms-1 whitespace-nowrap">
                              {obj.name}
                            </span>
                          </span>
                        </th>
                      );
                    }
                    return null;
                  })}
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className={`${
                    isSelected(user.id)
                      ? "bg-gray-100 border-l-4 border-l-purple-600"
                      : ""
                  } border-b border-gray-200`}
                >
                  <td className="px-4 py-3 text-xs">
                    <input
                      type="checkbox"
                      checked={isSelected(user.id)}
                      onChange={() => handleSelectUser(user.id)}
                      className="text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-600 accent-purple-600"
                    />
                  </td>

                  {visibleColumns.includes("createdOn") && (
                    <td className="px-4 py-3 text-gray-600  text-xs">
                      {user.createdOn}
                    </td>
                  )}
                  {visibleColumns.includes("payer") && (
                    <td className="px-4 py-3 text-gray-600  text-xs">
                      {user.payer}
                    </td>
                  )}
                  {visibleColumns.includes("status") && (
                    <td className="px-1 py-2 text-gray-600 text-xs">
                      <span
                        className={`p-1 px-2 w-min flex rounded-xl ${
                          user.status === "Active"
                            ? "bg-[#F0FDF9] text-green"
                            : user.status === "Leads"
                            ? "bg-[#EFF6FF] text-blue"
                            : "bg-[#F1F5F9] text-grey"
                        } `}
                      >
                        <span
                          className={`${
                            Classes[
                              `${
                                user.status === "Active"
                                  ? "dot-green"
                                  : user.status === "Leads"
                                  ? "dot-blue"
                                  : "dot-grey"
                              }`
                            ]
                          } me-1`}
                        ></span>
                        {user.status}
                      </span>
                    </td>
                  )}
                  {visibleColumns.includes("email") && (
                    <td className="px-4 py-3 text-gray-600 text-xs">
                      {user.email}
                    </td>
                  )}
                  {visibleColumns.includes("payerPhone") && (
                    <td className="px-4 py-3 text-gray-600 text-xs">
                      {user.payerPhone}
                    </td>
                  )}
                  {visibleColumns.includes("service") && (
                    <td className="px-4 py-3 text-gray-600 text-xs">
                      {user.service}
                    </td>
                  )}
                  {visibleColumns.includes("scheduled") && (
                    <td className="px-4 py-3 text-gray-600 text-xs">
                      {user.scheduled}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="m-2">
          <div className="flex items-center text-gray-600 text-sm">
            Displaying
            <span className="p-2 flex items-center bg-[#F8FAFC] rounded">
              <span className="text-[#334155]">15</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.66663 10L7.99996 13.3333L11.3333 10"
                  stroke="#334155"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.66663 6.00008L7.99996 2.66675L11.3333 6.00008"
                  stroke="#334155"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span> out of 104</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default WaitList;
