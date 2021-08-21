import Link from 'next/link'
import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
import { Meta, Breadcrumb, SidebarAd } from '../../components'

const AboutPage = () => {
  return (
    <div>
      <Meta title='About Freethim' keywords='One, two' />
      <Breadcrumb>
        <div className='d-flex align-items-center justify-content-between'>
          <h5>About</h5>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <RiArrowRightSLine />
            </li>
            <li>About</li>
          </ul>
        </div>
      </Breadcrumb>
      <section className='py-100'>
        <div className='container'>
          <div className='row'>
            <div className='content'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
              blanditiis explicabo obcaecati ex, aliquid vel neque! Nesciunt a
              fugiat reprehenderit ut repellendus, quae molestias rerum expedita
              laboriosam optio? Eligendi, ipsam. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Molestiae vel ea ad eos libero
              reprehenderit delectus, architecto, suscipit esse quae omnis earum
              commodi? At dolores adipisci ullam perferendis praesentium eaque
              vero incidunt rem placeat? Ad tempore eum quaerat doloremque.
              Repellendus minus cupiditate, doloremque atque explicabo, delectus
              molestiae vitae aliquam reiciendis nisi blanditiis distinctio
              aperiam harum vero, natus deserunt tempore ipsam at et. Excepturi
              molestias non illum assumenda cumque nulla fugit ad aut mollitia.
              Nemo maxime dignissimos quas eius, adipisci laboriosam qui
              consectetur dolores nesciunt beatae quia suscipit dolorum in enim
              similique facilis inventore delectus repellat eum aut cupiditate
              vitae. Aut, veniam ipsam at a iure voluptates delectus
              perspiciatis excepturi in repudiandae cum doloribus vero magni,
              quod commodi dolor porro dignissimos vel, odio aspernatur ab.
              Incidunt, qui quidem corrupti magni neque voluptatibus ullam. Id
              maxime dolorum provident ad a sit neque dolores consequuntur
              nesciunt quod necessitatibus ex deleniti officia totam voluptatum
              vero officiis illo ut, magni qui ipsam eos beatae autem
              aspernatur. Aspernatur nisi, at rerum necessitatibus dolore itaque
              est velit perferendis, recusandae, nulla et excepturi impedit
              dolorem similique deleniti delectus? Porro, est. Odit molestias
              corporis, at perferendis beatae qui delectus ut maxime dignissimos
              accusamus nihil quo perspiciatis repellat deserunt vero. Eum cum
              ullam, itaque excepturi quaerat ducimus esse veniam natus
              perferendis sunt optio suscipit recusandae vitae! Asperiores vero
              repellat ex eius nobis provident labore, impedit aliquid
              repellendus quam veritatis molestias quisquam, ducimus inventore?
              Dolorum, velit ducimus eum error blanditiis consequuntur
              laudantium nostrum saepe ullam iure aut, perferendis recusandae.
              Dolorem molestiae maxime sunt. Quidem totam facere enim
              repellendus animi reiciendis, nam esse! Inventore asperiores
              magnam cumque nihil non nemo quaerat, quam velit harum alias
              excepturi iusto? Corrupti dolorum ex quod vitae cupiditate atque
              nostrum numquam similique. In quidem unde, reprehenderit numquam
              nesciunt exercitationem beatae, quaerat itaque laboriosam tempore
              quam maiores eveniet accusamus, ab blanditiis iste dolorum velit?
              Sit delectus maiores eum, voluptatum illum recusandae possimus
              culpa. Necessitatibus amet minima minus est, perferendis, quaerat
              repellendus tenetur dolores alias temporibus aut molestiae nisi,
              ipsum nesciunt accusamus eaque sequi. Magnam saepe earum, deleniti
              esse magni fuga alias repellendus provident assumenda numquam? Ab
              quidem officia quos veniam nesciunt quisquam, incidunt autem
              voluptatibus, ipsa officiis tempora, aliquid adipisci? Blanditiis
              saepe molestiae dicta nobis fugit, earum exercitationem quasi
              perferendis sunt, provident, cupiditate eaque error hic explicabo
              voluptatibus velit ex eligendi sapiente? Quibusdam, soluta odio
              nesciunt amet quo totam nostrum quaerat nulla commodi sapiente
              doloribus voluptatibus reiciendis nemo ad ab harum itaque in! Iste
              reprehenderit numquam neque. Hic nihil consectetur nesciunt
              quisquam, aliquid voluptates nulla officia, tempore nam quo amet
              est velit quas ut voluptate eos incidunt libero atque vero. Sequi
              quam voluptate cumque eius impedit, nulla velit sit consequatur id
              alias pariatur esse fugit? Ab esse rem ut eum ipsum saepe, vel
              illo molestiae adipisci explicabo voluptatibus, at soluta!
              Necessitatibus culpa labore esse, fugiat fuga maiores aliquid
              dignissimos quo quisquam voluptatibus. Fugit quam omnis nihil
              itaque corporis asperiores animi id. Accusamus tenetur rerum
              explicabo non temporibus, tempora cumque culpa, similique,
              cupiditate et libero ipsum reiciendis fugit dolorem.
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

export default AboutPage
