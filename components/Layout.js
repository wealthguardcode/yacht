import Head from 'next/head'

export default function Layout({ children, title, description, keywords }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>{children}</main>
    </div>
  )
}

Layout.defaultProps = {
  title: 'WIG | Yacht Insurance Program',
  keywords: 'WealthGuard, WIG, yacht insurance, small business insurance',
  description: 'WealthGuard Insurance Group Yacht Insurance program',
}
