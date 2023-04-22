import Navbar from '../navbar'

type HeaderProps = {
  sidebarOpen: boolean
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Header({ sidebarOpen, setSidebarOpen }: HeaderProps) {
  return (
    <header>
      <div id='navbar-container' className='w-full h-16'>
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
    </header>
  )
}
