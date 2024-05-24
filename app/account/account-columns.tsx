 type Account = {
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

export const columns = [
  { Header: "Account Name", accessor: "accountName" },
  { Header: "Customer Number", accessor: "customerNumber" },
  { Header: "Account Number", accessor: "accountNumber" },
  { Header: "Product Type", accessor: "productType" },
  { Header: "Status", accessor: "status" },
];