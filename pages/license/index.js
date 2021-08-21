import Link from 'next/link'
import { RiArrowRightSLine } from 'react-icons/ri'
import { Breadcrumb, Meta, SidebarAd } from '../../components'

const License = () => {
  return (
    <div>
      <Meta title='About Freethim' keywords='One, two' />
      <Breadcrumb>
        <div className='d-flex align-items-center justify-content-between'>
          <h5>Template License</h5>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <RiArrowRightSLine />
            </li>
            <li>License</li>
          </ul>
        </div>
      </Breadcrumb>
      <section className='py-100'>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='content'>
              <h4 className='h3 mb-20'>Template License</h4>
              <p>
                All the free templates on this site can be use free in both
                personal and commercial projects. You can modify them however
                you like free of charge. In exchange, just give us credit for
                our design and spread the word about us.
              </p>
              <h5>Rights</h5>
              <p>
                You are allowed to use the templates in any number of personal
                and commercial projects for yourself or a client. You may modify
                the templates according to your requirements and include them in
                your projects under the following condition - you MUST give
                appropriate credit, provide an attribution link to freethim.com
              </p>
              <h5>Prohibitions:</h5>
              <p>
                You are not allowed to sell or redistribute(even for free) the
                templates without prior consent. If you would like to republish
                or promote our templates on your site, you could do so on the
                condition that you link back to the appropriate resource page on
                freethim.com where users can download the templates, you should
                not provide the templates for direct download from your website.
              </p>
              <h5>How to credit us?</h5>
              <p>
                Just visibly credit us somewhere on your site in a form of an
                attribution link. We prefer the footer credit that comes with
                the template but you are still free to move it somewhere else.
              </p>
              <h5>Need to use the template attribution-free?</h5>
              <p>
                However, if you need to use the template without the
                attribution/credit link, you have the option to send us an
                Attribution Removal Fee through PayPal. Please see the details
                here.
              </p>
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

export default License
