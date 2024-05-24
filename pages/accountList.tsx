"use client";

import Sidebar from '@/components/sidebar';
import React, { useState } from 'react';
import { FaRegEdit, FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Account {
  accountName: string;
  custName: string;
  accountNumber: number;
  productType: string;
  status: string;
}

interface AccountListProps {
  accounts: Account[];
}

const AccountList: React.FC<AccountListProps> = ({ accounts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortStatus, setSortStatus] = useState('All');
  const itemsPerPage = 5;

  const filteredAccounts = accounts.filter(account => {
    const matchesSearch = account.accountName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          account.custName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = sortStatus === 'All' || account.status === sortStatus;
    return matchesSearch && matchesStatus;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAccounts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredAccounts.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      <Sidebar />
      <main className="w-full max-w-7xl mx-auto p-10">
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-hpDarkBlue">Manage Accounts</h2>
        </header>
        <div className="bg-white p-6 shadow-md rounded">
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold mb-4 text-hpDarkBlue">Account List</h2>
            <div>
              <label className="text-gray-700">Sort by</label>
              <select 
                className="ml-2 p-2 border rounded"
                value={sortStatus}
                onChange={(e) => setSortStatus(e.target.value)}
              >
                <option>All</option>
                <option>Open</option>
                <option>Closed</option>
              </select>
            </div>
            <div className="flex space-x-2">
              
      <div className="relative w-full max-w-md">
        <input
          type="text"
          className="block w-full p-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-300 text-hpDarkBlue"
          placeholder="Search..."
          
        />
        <div className="absolute right-3 top-3 text-hpDarkBlue">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
            </div>
            <button className="px-4 py-2 bg-hpDarkBlue text-white rounded">Add Account</button>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <table className="min-w-full leading-normal">
              <thead>
                <tr className="text-hpDarkBlue font-semibold">
                  <th className="px-5 py-3 border-gray-200 bg-white text-left font-semibold tracking-wider">
                    Account Name
                  </th>
                  <th className="px-5 py-3 border-gray-200 bg-white text-left font-semibold tracking-wider">
                    Customer Name
                  </th>
                  <th className="px-5 py-3 border-gray-200 bg-white text-left font-semibold tracking-wider">
                    Account Number
                  </th>
                  <th className="px-5 py-3 border-gray-200 bg-white text-left font-semibold tracking-wider">
                    Product Type
                  </th>
                  <th className="px-5 py-3 border-gray-200 bg-white text-left font-semibold tracking-wider">
                    Status
                  </th>
                  <th className="px-5 py-3 border-gray-200 bg-white text-left font-semibold tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((account, index) => (
                  <tr key={index}>
                    <td className="px-5 py-5 border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{account.accountName}</p>
                    </td>
                    <td className="px-5 py-5 border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{account.custName}</p>
                    </td>
                    <td className="px-5 py-5 border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{account.accountNumber}</p>
                    </td>
                    <td className="px-5 py-5 border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{account.productType}</p>
                    </td>
                    <td className="px-5 py-5 border-gray-200 bg-white text-sm">
                      <span className={`px-2 py-1 rounded ${account.status === 'Open' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                        {account.status}
                      </span>
                    </td>
                    <td className="px-5 py-5 border-gray-200 bg-white text-sm">
                      <a href="#" className="text-hpDarkBlue hover:text-hpDarkBlue">
                        <FaRegEdit />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-4 space-x-2">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg ${currentPage === 1 ? 'bg-gray-200' : 'bg-hpDarkBlue text-white'}`}
            >
              <FaArrowLeft />
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`px-4 py-2 rounded-lg ${currentPage === i + 1 ? 'bg-hpDarkBlue text-white' : 'bg-white border'}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg ${currentPage === totalPages ? 'bg-gray-200' : 'bg-hpDarkBlue text-white'}`}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AccountList;
