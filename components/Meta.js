import Head from 'next/head'
const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
      />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Free website template',
  keywords: 'Free',
  description: 'Hello',
}

export default Meta
