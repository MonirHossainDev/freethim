import Image from 'next/image'
import Link from 'next/link'
import { RiArrowRightSLine, RiMoreFill } from 'react-icons/ri'
import { Meta, Breadcrumb, SidebarAd } from '../../../components'

const Business = () => {
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
              <Link href='/free-templates'>Free Templates</Link>
            </li>
            <li>
              <RiArrowRightSLine />
            </li>
            <li>Business</li>
          </ul>
        </div>
      </Breadcrumb>

      <section className='py-100'>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='content'>
              <p>
                Freethim offers the best in class website templates that are
                ready to use for any website. Our templates come whit contact
                form, bright color palettes and modern design. We have HTML,
                Bootstrap and React JS templates. Making a professional website
                has never been easier.
              </p>
              <div className='cats'>
                <ul>
                  <li>
                    <Link href='/free-templates'>All</Link>
                  </li>
                  <li className='active'>
                    <Link href='/free-templates/business'>Business</Link>
                  </li>
                </ul>
              </div>
              <article className='entry'>
                <Link href='/free-templates/business/publishing-company'>
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
                  <ul className='entry__text--cats'>
                    <li>
                      <Link href='/free-templates/business'>Business</Link>
                    </li>
                  </ul>
                  <h4 className='entry__text--title'>
                    <Link href='/free-templates/business/publishing-company'>
                      Publishing Company
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

export default Business
