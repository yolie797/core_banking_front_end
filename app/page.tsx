
import Sidebar from "@/components/sidebar";
import AccountList from "@/pages/accountList";
import Login from "@/pages/login"


const accounts = [
  {
    accountName: 'Account 1',
    custName: 'Customer 1',
    accountNumber: 123456,
    productType: 'Type A',
    status: 'Open'
  },
  {
    accountName: 'Account 2',
    custName: 'Customer 2',
    accountNumber: 789012,
    productType: 'Type B',
    status: 'Closed'
  },
  // Add more account objects as needed
];

export default function Home() {
  return (
    <div className="bg-blue-800">
     
      <AccountList accounts={accounts} />
    </div>
  );
}