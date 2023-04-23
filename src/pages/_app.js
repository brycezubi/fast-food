import '@/styles/globals.css'
import { TiendaProvider } from '../../context/tiendaProvider'

export default function App({ Component, pageProps }) {
  return (
    <TiendaProvider>
      <Component {...pageProps} />
    </TiendaProvider>
  )
  
}
