import Image from 'next/image'

const SidebarAd = () => {
  return (
    <div className='sticky top-20'>
      <Image
        src='/images/themes/add300.jpg'
        alt='Picture of the author'
        layout='responsive'
        width={300}
        height={600}
      />
    </div>
  )
}

export default SidebarAd
