import Link from 'next/link'
const Header = () => {
  return (
    <header className='header d-flex align-items-center justify-content-between'>
      <div className='header__left'>
        <Link href='/'>Freethim</Link>
      </div>
      <div className='header__right'>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/free-templates'>Free Templates</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/blog'>Blog</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
