import '../styles/globals.css'

import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/users'>Users</Link>
      </nav>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
