import AppsIcon from '../../icons/AppsIcon'
import CartIcon from '../../icons/CartIcon'
import MenuIcon from '../../icons/MenuIcon'
import NotificationIcon from '../../icons/NotificationIcon'
import SearchIcon from '../../icons/SearchIcon'
import SunIcon from '../../icons/SunIcon'
import profileImage from '../../assets/images/profile.jpg'
import ArrowLeftIcon from '../../icons/ArrowLeftIcon'

type NavbarProps = {
  sidebarOpen: boolean
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Navbar({ sidebarOpen, setSidebarOpen }: NavbarProps) {
  return (
    <nav className='border-primaryBorderColor border-2 h-16 flex justify-between'>
      <div id='leftbar' className='flex gap-2'>
        <div
          id='menu-icon'
          className='w-16 h-full flex justify-center items-center cursor-pointer'
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <ArrowLeftIcon /> : <MenuIcon />}
        </div>
        <div
          id='searchbar'
          className='flex my-3 px-2 justify-center items-center border-primaryBorderColor border-2 rounded'
        >
          <SearchIcon size='16' />
          <input
            type='text'
            name='search'
            id='search'
            className='px-2 focus:outline-none'
            placeholder='Search...'
          />
        </div>
      </div>
      <div id='rightbar' className='flex items-center px-4'>
        <div
          id='apps-icon'
          className='w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-primaryLight'
        >
          <AppsIcon />
        </div>
        <div
          id='cart-icon'
          className='w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-primaryLight'
        >
          <CartIcon />
        </div>
        <div
          id='sun-icon'
          className='w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-primaryLight'
        >
          <SunIcon />
        </div>
        <div
          id='sun-icon'
          className='w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-primaryLight'
        >
          <NotificationIcon />
        </div>
        <div
          id='profile-menu'
          className='h-full flex justify-between items-center cursor-pointer hover:bg-primaryLight mx-4 px-4'
        >
          <img
            src={profileImage}
            alt='profileImg'
            className=' rounded-md mr-4'
            width={24}
          />
          <div>
            <p className='text-sm font-semibold'>Jay Grace</p>
            <span className='text-xs font-semibold text-gray-400'>
              Administrator
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}
