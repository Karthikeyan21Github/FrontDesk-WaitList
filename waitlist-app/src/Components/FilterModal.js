import { useEffect, useState } from "react";
import {
  Calendar,
  PeopleIcon,
  DashBoard,
} from "../app/constants/Icons/SidebarIcons";

import ScheduleDate from "./Filter Components/ScheduleDate";
import SearchInputFilter from "./Filter Components/SearchInputFilter";
import Service from "./Filter Components/service";
import { peopleSearch } from "../app/constants/Variables/AppConstants";
function FilterModal(props) {
  const menuItems = [
    { key: "schedule", icon: <Calendar />, label: "Scheduled Date" },
    { key: "people", icon: <PeopleIcon />, label: "People" },
    { key: "service", icon: <DashBoard />, label: "Services / Product" },
  ];

  const { showFilterModal, setShowFilterModal } = props;
  const [currentIndex, setCurrentIndex] = useState("schedule");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event?.key && event.key === "Escape") {
        event.preventDefault();
        setShowFilterModal(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, []);

  return (
    <>
      {showFilterModal && (
        <div>
          <div
            className="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>

            <div className="fixed inset-0 z-10 w-screen scroll-smooth overflow-y-auto shadow-lg">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="rounded  relative transform  bg-white text-left shadow-xl transition-all">
                  <div className="flex justify-between border-b">
                    <aside className="rounded w-[230px] min-h-96 border-[1px] border-[#E2E8F0] border-b-0">
                      <nav className="h-full flex flex-col bg-white bg-[#F8FAFC]">
                        <div
                          className={`ms-2 mt-2 me-1 flex justify-between items-center`}
                        >
                          <ul>
                            {menuItems.map((item) => (
                              <li
                                key={item.key}
                                onClick={() => {
                                  setCurrentIndex(item.key);
                                }}
                                className={`${
                                  currentIndex === item.key && "bg-[#E2E8F0]"
                                }
                                    relative flex items-center py-1 px-2 my-1
                                    font-medium rounded-md cursor-pointer
                                    transition-colors group hover:bg-[#E2E8F0] text-gray-600
                                `}
                              >
                                {item.icon}
                                <span
                                  className={`overflow-hidden transition-all w-40 ml-3`}
                                >
                                  {item.label}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>{" "}
                      </nav>
                    </aside>

                    <div className="p-3 w-full">
                      <div className="w-[380px]">
                        {currentIndex === "schedule" ? (
                          <ScheduleDate />
                        ) : currentIndex === "people" ? (
                          <SearchInputFilter
                            peopleSearch={peopleSearch}
                            searchResultLimit={10}
                            placeholder={"Search"}
                          />
                        ) : currentIndex === "service" ? (
                          <Service />
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="rounded  bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      onClick={() => setShowFilterModal(false)}
                      className="bg-blue-500 text-white px-3 py-1 rounded bgPrimary"
                    >
                      Apply
                    </button>
                    <button
                      type="button"
                      className="bg-gray-200 px-3 py-1 font-light rounded mr-2 ghost-border border-[1px] bg-white primary"
                    >
                      Restore to Default
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default FilterModal;
