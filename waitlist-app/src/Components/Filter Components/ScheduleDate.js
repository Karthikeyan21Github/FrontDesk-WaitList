import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/datepicker.css";
import Select from "../ReusableSelect";
const ScheduleDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState("All");
  const options = [
    "All",
    "Custom",
    "Last 30 days",
    "This month",
    "Last month",
    "This quarter",
    "Previous month",
    "2 year ago",
    "An year ago",
    "2 quarters ago",
  ];

  return (
    <div>
      <Select
        label="Show orders for"
        options={options}
        selectedOption={selectedOption}
        onOptionSelect={setSelectedOption}
      />
      <div className="flex justify-between">
        <div className="flex flex-col me-1">
          <label className="block my-0.5 text-sm font-medium text-gray-700">
            From
          </label>
          <div className="flex items-center w-full mb-4">
            <ReactDatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd MMM yyyy"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="flex flex-col ms-1">
          <label className="block my-0.5 text-sm font-medium text-gray-700">
            To
          </label>
          <div className="flex items-center w-full">
            <ReactDatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd MMM yyyy"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ScheduleDate;
