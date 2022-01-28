import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children, title, description, keywords }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'WIG | Yacht Insurance Program',
  keywords: 'WealthGuard, WIG, yacht insurance, small business insurance',
  description: 'WealthGuard Insurance Group Yacht Insurance program',
}
