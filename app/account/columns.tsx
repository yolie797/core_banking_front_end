"use client";

import { ColumnDef } from "@tanstack/react-table";
import { FaEdit } from "react-icons/fa";
import { ArrowUpDown } from "lucide-react";

export type Account = {
  accountName: string;
  customerNumber: number;
  accountNumber: string;
  productType:
    | "savings"
    | "notice"
    | "cheque"
    | "fixed_deposit"
    | "general_ladger";
  status: "open" | "closed";
};

export const columns: ColumnDef<Account>[] = [
  {
    accessorKey: "accountName",
    header: "Account Name",
  },
  {
    accessorKey: "customerNumber",
    header: "Customer Number",
  },

  {
    accessorKey: "accountNumber",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Account Number
          <ArrowUpDown className="ml-2 h-4 w-5 text-purple-500  inline-flex items-center justify-center rounded-md text-sm" />
        </button>
      );
    },
  },

  {
    accessorKey: "productType",
    header: "Product Type",
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
        <span
          className={`px-4 py-1.5 rounded-xl ${
            row.original.status === "closed"
              ? "bg-red-300 text-red-500"
              : "bg-green-300 text-green-600"
          }`}
        >
          {row.original.status.charAt(0).toUpperCase() + row.original.status.slice(1)}
        </span>
      ),
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => (
      <button onClick={() => handleEdit(row.original)}>
        <FaEdit className="text-purple-400 hover:text-purple-700 size-5" />
      </button>
    ),
  },
];
function handleEdit(account: Account) {
  alert(`Editing account with account number: ${account.accountNumber} and customer Number ${account.customerNumber}`);
}
