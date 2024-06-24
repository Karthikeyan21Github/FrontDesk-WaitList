import { useState } from "react";

const EditColumns = ({
  visibleColumns,
  setVisibleColumns,
  open,
  setOpen,
  columns,
}) => {
  const [filter, setFilter] = useState(visibleColumns);
  const resetToDefault = () => {
    setVisibleColumns(columns.map((col) => col.id));
  };
  console.log("open....", open);
  console.count("Hello");
  return (
    <div
      className={`bg-white shadow-lg rounded-lg p-4 w-72 right-0 ease-linear ${
        open ? "absolute" : "hidden"
      }`}
    >
      <h3 className="font-semibold mb-1">Edit Columns</h3>
      <span className="font-light text-xs mb-1">
        Select the columns to rearrange
      </span>
      <div className="overflow-auto h-[200px] mt-2">
        {columns.map((column) => (
          <div key={column.id} className="flex items-center mb-2 relative">
            <input
              type="checkbox"
              id={column.id}
              checked={filter.includes(column.id)}
              onChange={(e) => {
                if (e.target.checked === true) {
                  setFilter((prev) => [...prev, column.id]);
                } else {
                  setFilter((prev) => prev.filter((obj) => obj !== column.id));
                }
              }}
              className="mr-2 form-checkbox"
            />
            <label htmlFor={column.id} className="text-sm">
              {column.name}
            </label>
          </div>
        ))}
      </div>
      <div className="p-3">
        <button
          onClick={resetToDefault}
          className="bg-gray-200 px-3 py-1 rounded mr-2 ghost-border border-[1px] bg-white primary"
        >
          Reset to Default
        </button>
        <button
          onClick={() => {
            setOpen(false);
            setVisibleColumns(filter);
          }}
          className="bg-blue-500 text-white px-3 py-1 rounded bgPrimary"
        >
          Apply
        </button>
      </div>
    </div>
  );
};
export default EditColumns;
