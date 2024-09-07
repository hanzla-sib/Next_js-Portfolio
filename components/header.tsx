'use client'

import { Link, animateScroll as scroll } from 'react-scroll'
import Image from 'next/image'
import Nav from '@/components/nav'
import MobileNav from '@/components/mobileNav'

const menu = [

  {
    name: 'Hire me',
    href: 'Contact'
  }
]
const Header = () => {
  return (
    <header className='fixed z-50 w-full bg-primary py-6 xl:py-8'>
      <div className='container mx-auto flex items-center justify-between'>
        {/* logo */}
        <Link to='/' spy={true} smooth={true} className='cursor-pointer'>
          <Image src='/logo.svg' height={54.53} width={41.35} alt='logo' />
        </Link>

        {/* disktop nav */}
        <div className='hidden items-center gap-x-8 xl:flex'>
          <Nav />
          {menu.map((item, index) => (
        <Link
          to={item.href}
          spy={true}
          smooth={true}
          key={index}
          
            className='cursor-pointer text-md rounded-full bg-blue px-6 py-2  text-white transition-all hover:bg-blue/80 text-lg font-medium capitalize'
         
        >
          <span className='pb-2 transition-all hover:border-b-2 hover:border-black hover:text-black'>
            {item.name}
          </span>
        </Link>
      ))}
        </div>
        {/* mobile nav */}
        <div className='z-50 xl:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
