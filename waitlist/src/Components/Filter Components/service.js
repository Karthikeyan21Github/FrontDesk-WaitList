import { useState } from "react";
import "./service.css";
import SearchInputFilter from "./SearchInputFilter";
import FilterByTag from "./FilterByTag";
import { searchByName } from "../../app/constants/Variables/AppConstants";
function Service() {
  const [selectedSearchType, setSelectedSearchType] = useState("name");
  const handleRadioChange = (event) => {
    setSelectedSearchType(event.target.value);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            className="me-2 input-radio"
            type="radio"
            id="name"
            name="search"
            value="name"
            onChange={handleRadioChange}
            checked={selectedSearchType === "name"}
          />
          <label className="text-sm" htmlFor="name">
            Search by name
          </label>
        </div>

        <div className="flex items-center">
          <input
            className="me-2 input-radio"
            type="radio"
            id="tag"
            name="search"
            value="tag"
            onChange={handleRadioChange}
            checked={selectedSearchType === "tag"}
          />
          <label className="text-sm" htmlFor="tag">
            Search by Tags
          </label>
        </div>
      </div>
      <div className="pt-3">
        {selectedSearchType === "name" ? (
          <SearchInputFilter
            peopleSearch={searchByName}
            searchResultLimit={10}
            placeholder={"Search By Name"}
            onSelectionChange={null}
          />
        ) : (
          <FilterByTag />
        )}
      </div>
    </div>
  );
}
export default Service;
