
import Sidebar from "@/components/sidebar";
import AccountList from "@/pages/accountList";
import Login from "@/pages/login";


const accounts = [
  {
    accountName: "Kathryn Murphy",
    custName: "Kathryn21",
    accountNumber: 20507899450,
    productType: "Savings",
    status: "Open",
  },
  {
    accountName: "Kathryn Murphy",
    custName: "Kathryn21",
    accountNumber: 25740789945,
    productType: "Notice",
    status: "Open",
  },
  {
    accountName: "Eleanor Pena",
    custName: "Penagolem",
    accountNumber: 781945967820,
    productType: "Fixed",
    status: "Open",
  },
  {
    accountName: "Floyd Miles",
    custName: "Floydbanjir",
    accountNumber: 781945967520,
    productType: "Cheque",
    status: "Open",
  },
  {
    accountName: "Kathryn Murphy",
    custName: "Kathryn21",
    accountNumber: 7845967545,
    productType: "Savings",
    status: "Closed",
  },
  {
    accountName: "Courtney Henry",
    custName: "Henrygaul",
    accountNumber: 1145967222,
    productType: "Notice",
    status: "Open",
  },
  {
    accountName: "Eleanor Pena",
    custName: "Penagolem",
    accountNumber: 45145967555,
    productType: "Notice",
    status: "Closed",
  },
];

export default function Home() {
  return (
    <div className="bg-gray-100 mx-auto">
     
      <AccountList accounts={accounts}   />
    </div>
  );
}