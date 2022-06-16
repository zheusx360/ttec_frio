import { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import * as gtag from '../../lib/gtag'
import { Header, HeaderMobile } from '../components'
import Footer from '../components/footer/footer'
import { WhatsAppButton } from '../components/buttons/whatsappButton'
import Head from 'next/head'

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Head>
         <title>TTECFRIO CÂMARAS FRIGORÍFICAS</title>
         <meta name='description' content='ttec frio câmaras frigoríficas = manutenção, instalação e suporte' />
         <link rel='icon' href='/favicon.ico' />
         <meta name="google-site-verification" content="TQrIYboCQV1vHbVKDskGx4K0tU2RiLF_nnzKKtYWkFs" />
       </Head>
       <header>
         <title>TTEC FRIO - Câmaras frigoríficas</title>
         <meta name="google-site-verification" content="TQrIYboCQV1vHbVKDskGx4K0tU2RiLF_nnzKKtYWkFs" />
       </header>
       <WhatsAppButton />
       <Header />
       <HeaderMobile />
       <Component {...pageProps} />
       <Footer />
    </>
  )
}

export default App
