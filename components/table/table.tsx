import React, { useState, useMemo } from "react";
import { FaEdit, FaTrash, FaAngleDown } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import HpButton from "../HPButton";

interface Column {
  Header: string;
  accessor: string;
}

interface TableProps {
  columns: Column[];
  data: Record<string, any>[];
  title: string; 
  text: string
}

const Table: React.FC<TableProps> = ({ columns, data, title, text }) => {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sortedData = useMemo(() => {
    let sortableData = [...data];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedData, currentPage]);

  const requestSort = (key: string) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
    setIsDropdownOpen(false);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between  items-center p-4">
        <h2 className="text-lg font-semibold text-hpDarkBlue">{title}</h2>{" "}
        {}
        <div className="p-4 relative inline-block text-left">
          <div>
             {/* Search bar button*/}
          </div>
          <div>
            <button
              type="button"
              className=" inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-hpDarkBlue text-sm font-medium text-gray-100 focus:outline-none"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Sort by <FaAngleDown className="ml-2" />
            </button>
          </div>
          {isDropdownOpen && (
            <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg  ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {columns.map((column) => (
                  <a
                    key={column.accessor}
                    href="#"
                    onClick={() => requestSort(column.accessor)}
                    className="block px-4 py-2 text-sm text-hpDarkBlue "
                    role="menuitem"
                  >
                    {column.Header}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        <div>
         <HpButton text={text} />
        </div>
      </div>
      <div className="p-5 shadow-md rounded-lg overflow-hidden border border-gray-200">
      <table className="min-w-full text-sm text-left text-hpDarkBlue">
        <thead className="text-xs text-hpDarkBlue uppercase ">
          <tr>
            {columns.map((column) => (
              <th key={column.accessor} className="px-6 py-3 ">
                {column.Header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className=" hover:bg-purple-50 text-gray-800 font-medium"
            >
              {columns.map((column) => (
                <td key={column.accessor} className="px-6 py-4">
                  {column.accessor === "action" ? (
                    <div className="flex space-x-2">
                      <a href="#" className="text-purple-400 hover:underline">
                        <FaEdit className="size-3" />
                      </a>
                      <a href="#" className="text-red-400 hover:underline">
                        <FaTrash className="size-3 ml-2" />
                      </a>
                    </div>
                  ) : column.accessor === "status" ? (
                    <span
                      className={`px-2 py-1 font-semibold leading-tight rounded-full ${
                        row[column.accessor] === "Closed"
                          ? "text-red-700 bg-red-100"
                          : "text-green-700 bg-green-100"
                      }`}
                    >
                      {row[column.accessor]}
                    </span>
                  ) : (
                    row[column.accessor]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className="flex justify-between items-center p-4">
        <div className="flex justify-center flex-grow">
          <button
            className="mr-3 px-1 py-1 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <FaAngleLeft />
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`px-2 leading-tight border rounded-lg ml-2 mr-2 ${
                currentPage === index + 1
                  ? "text-white bg-blue-950"
                  : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="ml-3 px-1 leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
