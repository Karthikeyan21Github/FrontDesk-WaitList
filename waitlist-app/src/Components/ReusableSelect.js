import React, { useState } from "react";

const Select = ({ label, options, selectedOption, onOptionSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    onOptionSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col">
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        <button
          type="button"
          onClick={toggleDropdown}
          className="w-full px-3 py-2 pr-10 text-left text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-black focus:border-black sm:text-sm"
        >
          {selectedOption}
          <span className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className={`w-4 h-4 text-gray-700 transition-transform transform ${
                isOpen ? "rotate-180" : ""
              }`}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="#71717A"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
        {isOpen && (
          <ul className="absolute max-h-[232px] scroll-smooth overflow -auto w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleOptionClick(option)}
                className={`px-2 h-[32px] py-1 cursor-pointer text-sm hover:bg-gray-100 ${
                  selectedOption === option ? "font-medium" : "font-light"
                }`}
              >
                <div className="w-full flex justify-between items-center text-sm">
                  {option}
                  {selectedOption === option && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M13.3334 4L6.00002 11.3333L2.66669 8"
                        stroke="#71717A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Select;
