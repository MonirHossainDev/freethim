import Link from 'next/link'
import { RiArrowRightSLine } from 'react-icons/ri'
import { Breadcrumb, Meta, SidebarAd } from '../../components'

const Customize = () => {
  return (
    <div>
      <Meta title='About Freethim' keywords='One, two' />
      <Breadcrumb>
        <div className='breadcrumb__lg'>
          <h5>Template Customization</h5>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <RiArrowRightSLine />
            </li>
            <li>Customize</li>
          </ul>
        </div>
      </Breadcrumb>
      <section className='py-100'>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='content'>
              <h4>Customization Details</h4>
              <p>
                Get your website template customize professionally by the
                designers who designed and built it. Starting at:
              </p>
              <span className='customize-price'>$ 100</span>

              <p>
                We offer professional website template customization for the
                templates we built and released here at freethim. Choose a
                template and submit to us the customization requirements and we
                will work on the design until the desired result is achieve.
                Price of our standard template customization package is $100 and
                includes the following:
              </p>

              <ul>
                <li>3 page customization</li>
                <li>Text contents replacement and insertion</li>
                <li>Image/graphics replacement and insertion</li>
                <li>Menu/navigation modifications</li>
                <li>Color scheme modifications</li>
                <li>Font modifications</li>
                <li>Minor layout and script modifications</li>
              </ul>

              <p>
                For customization requirements that will go beyond the scope of
                our standard package, additional fee will be added based on the
                complexity of the request. Submit to us your modification
                requirements, we will review the request and send you the price
                of your project order.
              </p>
              <p>
                Also, please take note that we only customize template made by
                us.
              </p>
              <h5>Requirements</h5>
              <p>
                To help speed up the process, please provide and submit to us as
                many of the following information/details.
              </p>
              <ul>
                <li>Business description</li>
                <li>Describe your site needs</li>
                <li>Examples of websites you like</li>
                <li>Color and style preference</li>
                <li>Competitors on your field</li>
                <li>Additional info you want me to have</li>
              </ul>
              <h5>Other stuff I’ll need from you</h5>
              <ul>
                <li>High resolution logo (SVG and AI file much better)</li>
                <li>
                  Other assets such as photos, vectors, graphics that you want
                  to be included in the design
                </li>
                <li>Text and contents for the site</li>
              </ul>
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

export default Customize
