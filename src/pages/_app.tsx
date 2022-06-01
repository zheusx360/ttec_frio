import { AppProps } from 'next/app'
import '../styles/global.scss'
import { Header, HeaderMobile } from '../components'
import Footer from '../components/footer/footer'
import { WhatsAppButton } from '../components/buttons/whatsappButton'


function MyApp({ Component, pageProps }: AppProps) {

  return (
  <>
    <header>
      <title>TTEC FRIO - Câmaras frigoríficas</title>
    </header>
    <WhatsAppButton/>
    <Header/>
    <HeaderMobile/>
    <Component {...pageProps} />
    <Footer/>
  </>
  )

}

export default MyApp

