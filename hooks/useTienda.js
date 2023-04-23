import { useContext } from 'react'
import TiendaContext from '../context/tiendaProvider'

const useTienda =()=>{
  return ( 
      useContext(TiendaContext)
  )
}

export default useTienda