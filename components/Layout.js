import Head from 'next/head'
import Script from 'next/script'
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
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap'
          rel='stylesheet'
        />

        <link
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'
          rel='stylesheet'
        />

        <link
          href='https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.2/mdb.min.css'
          rel='stylesheet'
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Script
        src='https://code.jquery.com/jquery-3.6.0.min.js'
        integrity='sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4='
        crossorigin='anonymous'
      />
      <Script
        type='text/javascript'
        src='https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.2/mdb.min.js'></Script>

      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'WIG | Yacht Insurance Program',
  keywords: 'WealthGuard, WIG, yacht insurance, small business insurance',
  description: 'WealthGuard Insurance Group Yacht Insurance program',
}
