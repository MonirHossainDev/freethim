import Image from 'next/image'
import Link from 'next/link'
import { RiArrowRightSLine, RiMoreFill } from 'react-icons/ri'
import { Meta, Breadcrumb, SidebarAd } from '../../components'

const FreeTemplates = () => {
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
            <li>Free Templates</li>
          </ul>
        </div>
      </Breadcrumb>

      <section className='py-100'>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='content'>
              <div className='cats'>
                <ul>
                  <li className='active'>
                    <Link href='/'>All</Link>
                  </li>
                  <li>
                    <Link href='/'>Bootstrap5</Link>
                  </li>
                  <li>
                    <Link href='/'>React Js</Link>
                  </li>
                </ul>
              </div>
              <article className='entry'>
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
                <div className='entry__text'>
                  <ul className='entry__text--cats'>
                    <li>
                      <Link href='/free-templates/'>Business,</Link>
                    </li>
                    <li>
                      <Link href='/free-templates/'>Consulting</Link>
                    </li>
                  </ul>
                  <h3 className='entry__text--title'>
                    <Link href='/free-templates/one'>Repair</Link>
                  </h3>
                  <div>
                    If the services you offer are entirely dedicated to computer
                    repair, let Repair website template take care of your web
                    presence. New clients, after all, are always welcome and
                    with a proper page, you can gain a ton of them.
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

export default FreeTemplates
