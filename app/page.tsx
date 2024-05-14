import Head from "next/head";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="bg-blue-800">
      <Head>
        <title>Responsive Side-Navbar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pro.ico" />
      </Head>
      <Sidebar />
    </div>
  );
}