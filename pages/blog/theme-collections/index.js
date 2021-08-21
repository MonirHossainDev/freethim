import Image from 'next/image'
import Link from 'next/link'
import {
  RiArrowRightSLine,
  RiFolder2Line,
  RiMoreFill,
  RiPriceTag2Line,
  RiPriceTag3Line,
  RiPriceTagLine,
} from 'react-icons/ri'
import { Meta, Breadcrumb, SidebarAd } from '../../../components'

const ThemeCollections = () => {
  return (
    <div>
      <Meta title='About Freethim' keywords='One, two' />
      <Breadcrumb>
        <div className='d-flex align-items-center justify-content-between'>
          <h5>Free Templates</h5>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <RiArrowRightSLine />
            </li>
            <li>
              <Link href='/blog'>Blog</Link>
            </li>
            <li>
              <RiArrowRightSLine />
            </li>
            <li>Theme Collections</li>
          </ul>
        </div>
      </Breadcrumb>

      <section className='py-100'>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='content'>
              <article className='entry'>
                <Link href='/blog/theme-collections/online-course-wordpress-themes'>
                  <div className='entry__thumb'>
                    <Image
                      src='/images/themes/theme1.jpg'
                      alt='Picture of the author'
                      layout='responsive'
                      width={739}
                      height={374}
                    />
                    <div className='middle'>
                      <RiMoreFill />
                    </div>
                  </div>
                </Link>
                <div className='entry__text'>
                  <h4 className='entry__text--title'>
                    <Link href='/blog/theme-collections/online-course-wordpress-themes'>
                      2021 Best Online Course WordPress Themes to Create Your
                      Digital Class
                    </Link>
                  </h4>
                  <div>
                    Publishing Company, hence the name, is a free website
                    template design for a book publishing company. If you are
                    searching for a professional and sophisticated web design
                    that..
                  </div>
                </div>
              </article>
            </div>
            <div className='sidebar'>
              <SidebarAd />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ThemeCollections
