import Image from 'next/image'
import Link from 'next/link'
import { Meta, Breadcrumb, SidebarAd } from '../../../components'
import { RiArrowRightSLine, RiFolder2Line, RiTimeLine } from 'react-icons/ri'
const OnlineCourseWordpressThemes = () => {
  return (
    <div>
      <Meta title='About Freethim' keywords='One, two' />
      <Breadcrumb>
        <div className='breadcrumb__lg'>
          <h5>Freethim Blog</h5>
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
            <li>
              <Link href='/blog/theme-collections'>Theme Collectons</Link>
            </li>
            <li>
              <RiArrowRightSLine />
            </li>
            <li>
              2021 Best Online Course WordPress Themes to Create Your Digital
              Class
            </li>
          </ul>
        </div>
      </Breadcrumb>

      <section className='py-100'>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='content'>
              <article className='entry'>
                <div className='entry__heading'>
                  <h2 className='h3 mb-20'>
                    2021 Best Online Course WordPress Themes to Create Your
                    Digital Class
                  </h2>
                </div>
                <div className='entry__meta'>
                  <ul className='entry__meta--cats'>
                    <li>
                      <RiFolder2Line />
                      <Link href='/blog/theme-collections'>
                        Theme Collection
                      </Link>
                    </li>
                    <li>
                      <RiTimeLine />
                      25 Aug 2021
                    </li>
                  </ul>
                </div>
                <div className='entry__thumb mb-40'>
                  <Image
                    src='/images/themes/theme1.jpg'
                    alt='Picture of the author'
                    layout='responsive'
                    width={739}
                    height={374}
                  />
                </div>
                <div className='entry__text--full'>
                  <h4 className='mb-20'>Description</h4>
                  <p>
                    Publishing Company, hence the name, is a website template
                    design for a book publishing company. If you are searching
                    for a professional and sophisticated web design that is easy
                    to use, Publishing Company is the one to go with. The
                    beautiful and modern appearance of the template will display
                    all your content wonderfully. Even by going with the default
                    design, you guarantee yourself a top-notch end product.
                    Still, branding it according to your publishing company’s
                    regulations is also an option.
                  </p>
                  <p>
                    Along with the neat front page, you also get multiple inner
                    layouts, parallax effects, social icons, scrolling
                    animations and testimonials slider. Keep in mind, this is
                    just a small segment of all the goodies that you get with
                    the website template, Publishing Company. If you are ready
                    to take action, download the tool now and make some noise
                    online sooner rather than later.
                  </p>
                </div>
                <div className='template-link'>
                  <a className='btn btn-primary py-10' href='#'>
                    Download
                  </a>
                  <a className='btn btn-secondary py-10' href='#'>
                    Preview
                  </a>
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

export default OnlineCourseWordpressThemes
