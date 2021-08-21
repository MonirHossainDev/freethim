import { useState } from 'react'
import Link from 'next/link'
import { RiCloseCircleLine, RiMenu2Fill } from 'react-icons/ri'
const Header = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <header>
      <div className='container'>
        <div className='navbar'>
          <div className='navbar__logo'>
            <Link href='/'>freethim</Link>
          </div>
          <ul className={click ? 'navbar__nav active' : 'navbar__nav'}>
            <div
              className='mobile-logo md-link logo text-center mb-30'
              onClick={closeMobileMenu}
            >
              <Link href='/'>freethim</Link>
            </div>
            <li className='option' onClick={closeMobileMenu}>
              <Link href='/'>Home</Link>
            </li>
            <li className='option' onClick={closeMobileMenu}>
              <Link href='/free-templates'>Free Templates</Link>
            </li>
            <li className='option' onClick={closeMobileMenu}>
              <Link href='/blog'>Blog</Link>
            </li>
            <li className='option' onClick={closeMobileMenu}>
              <Link href='/about'>About</Link>
            </li>
            <li className='option' onClick={closeMobileMenu}>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
          <div className='navbar__toggler' onClick={handleClick}>
            {click ? <RiCloseCircleLine /> : <RiMenu2Fill />}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
