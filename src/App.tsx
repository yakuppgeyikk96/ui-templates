import Header from "./components/header";
import Main from "./components/main";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

export default function App() {
  return (
    <div className="flex font-roboto-mono">
      <div className="h-screen bg-primaryColor">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Header />
        <Main />
      </div>
    </div>
  )
}