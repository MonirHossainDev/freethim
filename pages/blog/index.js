import Image from 'next/image'
import Link from 'next/link'
import { Meta, Breadcrumb, SidebarAd } from '../../components'

const Blog = () => {
  return (
    <div>
      <Meta title='About Freethim' keywords='One, two' />
      <Breadcrumb>
        <h4>Blog</h4>
        <ul>
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>Blog</a>
          </li>
        </ul>
      </Breadcrumb>

      <section className='py-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              {/* <div className='cats'>
                <ul>
                  <li>
                    <Link href='/'>All</Link>
                  </li>
                  <li>
                    <Link href='/'>Bootstrap5</Link>
                  </li>
                  <li>
                    <Link href='/'>React Js</Link>
                  </li>
                </ul>
              </div> */}
              <article className='entry'>
                <div className='entry__thumb'>
                  <Image
                    src='/images/themes/theme1.jpg'
                    alt='Picture of the author'
                    layout='responsive'
                    width={739}
                    height={374}
                  />
                </div>

                <div className='entry__text'>
                  <ul>
                    <li>
                      <a href=''>Business,</a>
                    </li>
                    <li>
                      <a href=''>Consulting</a>
                    </li>
                  </ul>
                  <h2>Repair</h2>
                  <div>
                    If the services you offer are entirely dedicated to computer
                    repair, let Repair website template take care of your web
                    presence. New clients, after all, are always welcome and
                    with a proper page, you can gain a ton of them.
                  </div>
                </div>
              </article>
              <article className='entry'>
                <div className='entry__thumb'>
                  <Image
                    src='/images/themes/theme1.jpg'
                    alt='Picture of the author'
                    layout='responsive'
                    width={739}
                    height={374}
                  />
                </div>

                <div className='entry__text'>
                  <ul>
                    <li>
                      <a href=''>Business,</a>
                    </li>
                    <li>
                      <a href=''>Consulting</a>
                    </li>
                  </ul>
                  <h2>Repair</h2>
                  <div>
                    If the services you offer are entirely dedicated to computer
                    repair, let Repair website template take care of your web
                    presence. New clients, after all, are always welcome and
                    with a proper page, you can gain a ton of them.
                  </div>
                </div>
              </article>
            </div>

            <div className='col-lg-4'>
              <SidebarAd />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
