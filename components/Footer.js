import Link from 'next/link'
import {
  RiTwitterFill,
  RiLinkedinFill,
  RiFacebookCircleFill,
  RiInstagramLine,
  RiGithubFill,
  RiLinkedinBoxFill,
} from 'react-icons/ri'
const Footer = () => {
  return (
    <footer className='py-80 footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <h1>freethim</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae blanditiis dolor placeat est enim iusto tempora
              mollitia fuga praesentium necessitatibus.
            </p>
            <ul className='social'>
              <li>
                <Link href='/'>
                  <a>
                    <RiTwitterFill />
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>
                    <RiLinkedinBoxFill />
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>
                    <RiFacebookCircleFill />
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>
                    <RiInstagramLine />
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>
                    <RiGithubFill />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-lg-3 col-6'>
            {/* <h5>Usefull Link</h5> */}
            <ul>
              <li>
                <Link href='/license'>About Freethim</Link>
              </li>
              <li>
                <Link href='/license'>Affiliate disclosure</Link>
              </li>
              <li>
                <Link href='/license'>We are buying</Link>
              </li>
              <li>
                <Link href='/license'>License</Link>
              </li>
              <li>
                <Link href='/license'>Customization</Link>
              </li>
              <li>
                <Link href='/license'>Advertise</Link>
              </li>
            </ul>
          </div>
          <div className='col-lg-3 col-6'>
            <ul>
              <li>
                <Link href='/license'>Premium Themes</Link>
              </li>
              <li>
                <Link href='/license'>Free Templates</Link>
              </li>
              <li>
                <Link href='/license'>Blog</Link>
              </li>

              <li>
                <Link href='/license'>Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
