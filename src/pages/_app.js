import '@/styles/globals.css'

import Head from 'next/head'
import HeaderNav from '@/components/HeaderNav'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Zensar Studios Technical Exercise</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <HeaderNav />

      <div className='app-container'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
