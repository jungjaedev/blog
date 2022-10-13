import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto flex min-h-screen flex-col">
      <div className="sticky top-0">
        <Header />
      </div>
      <div className="w-full">
        <Component {...pageProps} />
      </div>
    <Footer />
  </div>
  )
}

export default MyApp
