import { useState } from "react";
import Select from "../ReusableSelect";

const serviceOptions = [
  "Show all Service Type",
  "Class",
  "Appointment",
  "Faculty",
  "Class Pack",
  "MemberShip",
  "general Items",
];

const statusOptions = ["Show all", "Public", "Private", "Disable", "Draft"];
function FilterByTag() {
  const [selectedServiceOption, setSelectedServiceOption] = useState(
    serviceOptions[0]
  );
  const [selectedStatusOption, setSelectedStatusOption] = useState(
    statusOptions[0]
  );
  return (
    <div className="relative">
      {/* <div className={`absolute w-[380px] top-[-30px] bg-white h-96`}> */}
      <Select
        label="Service type"
        options={serviceOptions}
        selectedOption={selectedServiceOption}
        onOptionSelect={setSelectedServiceOption}
      />
      {/* </div> */}
      <br />
      <Select
        label="Status"
        options={statusOptions}
        selectedOption={selectedStatusOption}
        onOptionSelect={setSelectedStatusOption}
      />
    </div>
  );
}

export default FilterByTag;
