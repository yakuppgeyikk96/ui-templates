import Navbar from "../navbar";

export default function Header() {
  return (
    <header>
      <div 
        id="navbar-container" 
        className="w-full h-16"
      >
        <Navbar />
      </div>
    </header>
  )
}