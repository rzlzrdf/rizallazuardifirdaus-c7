import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {

  
  return (
    <>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/input">Input</Link></li>
        <li><Link href="/chart">Chart</Link></li>
        <li><Link href="/download">Download</Link></li>
      </ul>
      <Component {...pageProps} />
    </>
  
  )
}

export default MyApp
