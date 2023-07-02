import { useEffect, useState } from "react";
import Header from "../header";
import Main from "../main";
import { useNavigate } from "react-router-dom";
import ClosedSidebar from "../closed-sidebar";
import Sidebar from "../sidebar";

export default function RootLayout() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <div className="flex font-open-sans">
      <div className="h-screen bg-primaryColor">
        {sidebarOpen === true ? <Sidebar /> : <ClosedSidebar />}
      </div>
      <div className="flex-1">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Main />
      </div>
    </div>
  );
}
