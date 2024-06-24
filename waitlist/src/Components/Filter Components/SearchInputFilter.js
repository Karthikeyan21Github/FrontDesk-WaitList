import { useEffect, useState } from "react";
import { Search, CloseIcon } from "../../app/constants/Icons/SidebarIcons";
function SearchInputFilter({
  peopleSearch,
  placeholder,
  onSelectionChange,
  searchResultLimit = 10,
}) {
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState([]);
  const [selectedList, setSelectedList] = useState([]);

  useEffect(() => {
    if (searchValue) {
      let filteredArr = peopleSearch.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      filteredArr =
        filteredArr?.length > searchResultLimit
          ? filteredArr.slice(0, searchResultLimit)
          : filteredArr;
      setResult(filteredArr);
    } else {
      setResult([]);
    }
  }, [searchValue, peopleSearch, searchResultLimit]);

  useEffect(() => {
    // onSelectionChange(selectedList);
  }, [selectedList, onSelectionChange]);

  return (
    <div className="overflow-auto h-[326px]">
      <div className="px-2 flex bg-[#F9FAFB] h-[28px] items-center border-[1px] border-[#E2E8F0] rounded-md ">
        <Search />
        <span className="flex justify-between items-center w-full">
          <input
            value={searchValue}
            placeholder={placeholder}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            className="border-0 bg-[#F9FAFB] focus-visible:outline-0 ms-2 w-full placeholder:text-sm"
          />
          {searchValue && (
            <span
              onClick={() => {
                setSearchValue("");
              }}
              className="cursor-pointer"
            >
              <CloseIcon />
            </span>
          )}
        </span>
      </div>

      {searchValue && (
        <div>
          <div className="font-light my-2 text-[12px]">
            Showing {result?.length} results matching "{searchValue}"
          </div>
          <ul>
            {result &&
              result?.map((obj, index) => (
                <li
                  key={index}
                  className="flex items-center mb-3 relative text-sm"
                >
                  <input
                    checked={selectedList
                      .map((obj) => obj.name)
                      .includes(obj.name)}
                    onChange={(e) => {
                      if (e.target.checked === true) {
                        setSelectedList((prev) => [...prev, obj]);
                      } else {
                        setSelectedList((prev) =>
                          prev.filter((map) => map.name !== obj.name)
                        );
                      }
                    }}
                    type="checkbox"
                    className="mr-2 form-checkbox"
                  />
                  <span className="capitalize">{obj.name}</span>
                  <span className="bg-[#F8FAFC] capitalize px-2 ms-1 rounded-lg p-0.5 text-xs">
                    {obj.tag}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      )}
      {!searchValue && result?.length < 1 && selectedList?.length > 0 && (
        <ul className="mt-3">
          {selectedList?.map((obj, index) => (
            <li key={index} className="flex items-center mb-3 relative text-sm">
              <input
                checked={true}
                onChange={(e) => {
                  if (e.target.checked === true) {
                    setSelectedList((prev) => [...prev, obj]);
                  } else {
                    setSelectedList((prev) =>
                      prev.filter((map) => map.name !== obj.name)
                    );
                  }
                }}
                type="checkbox"
                className="mr-2 form-checkbox"
              />
              <span className="capitalize">{obj.name}</span>
              <span className="bg-[#F8FAFC] capitalize px-2 ms-1 rounded-lg p-0.5 text-xs">
                {obj.tag}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default SearchInputFilter;
