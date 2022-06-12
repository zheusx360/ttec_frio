import { AppProps } from 'next/app'
import '../styles/global.scss'
import { Header, HeaderMobile } from '../components'
import Footer from '../components/footer/footer'
import { WhatsAppButton } from '../components/buttons/whatsappButton'
import Head from 'next/head'


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
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

export default MyApp

