"use client";

import Sidebar from '@/components/sidebar';
import React, { useState } from 'react';
import { FaRegEdit, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { columns } from '@/app/account/account-columns';
import Table from '@/components/table/table';

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


  return (
    <div className="flex h-screen w-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col mx-auto p-4 w-2/3 max-w-1/2">
        <header className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-3xl font-semibold text-hpDarkBlue">Manage Accounts</h2>
            <label className="text-lg text-hpLimeGreen">Manage and organise your accounts</label>
          </div>
        </header>
        
        <div className="flex-1 overflow-x-auto">
          <Table columns={columns} data={accounts} title="Account List" text="Add Account" />
        </div>
      </div>
    </div>
  );
};

export default AccountList;
