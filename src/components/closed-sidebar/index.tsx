import { useState, useEffect } from 'react'
import logo from '../../assets/images/logo.png'
import { navItems } from '../../constants/sidebarItems'
import DashboardIcon from '../../icons/DashboardIcon'
import AuthIcon from '../../icons/AuthIcon'
import PagesIcon from '../../icons/PagesIcon'

type IconType = React.FC<{ color: string; size: string }>

const icons: { [key: string]: IconType } = {
  DashboardIcon,
  AuthIcon,
  PagesIcon,
}

export default function ClosedSidebar() {
  const [sidebarItems, setSidebarItems] = useState(navItems)
  const [sidebarWidth, setSidebarWidth] = useState('w-0')

  useEffect(() => {
    setSidebarWidth('w-16')
  }, [])

  return (
    <aside
      className={`${sidebarWidth} overflow-hidden transition-all duration-500`}
    >
      <div className='h-16 w-full flex items-center'>
        <div className='w-16 flex justify-center'>
          <img src={logo} alt='logo' width={32} />
        </div>
      </div>
      <div className='w-full mt-4 px-2'>
        {sidebarItems.map((navItem) => (
          <>
            <p className='text-center text-gray-500 font-bold text-sm'>
              {navItem.mainTitle ? '...' : ''}
            </p>
            {navItem.items.map((item) => {
              const Icon = icons[item.icon]

              return (
                <div className='w-12 flex justify-center text-iconPassive my-2'>
                  <Icon color='currentColor' size='20' />
                </div>
              )
            })}
          </>
        ))}
      </div>
    </aside>
  )
}
