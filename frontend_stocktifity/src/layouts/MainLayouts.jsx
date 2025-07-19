import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState } from "react";

const MainLayout = () => {
  const [isOpen, setOpen] = useState(true);
  const toggleSidebar = () => setOpen(!isOpen);

  return (
    <div className="flex relative">
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <div className={`${isOpen ? "ml-[200px]" : "ml-[64px]"} w-screen duration-500`}>
        <Header />
        <main className="pt-[37px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
