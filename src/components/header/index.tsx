import Navbar from "../navbar";

export default function Header({ sidebarOpen, setSidebarOpen}) {
  return (
    <header>
      <div 
        id="navbar-container" 
        className="w-full h-16"
      >
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
    </header>
  )
}