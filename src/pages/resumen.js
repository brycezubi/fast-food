import Layout from '../../layout/Layout'
import useTienda from '../../hooks/useTienda'
import PedidoProducto from '../../components/PedidoProducto'

const Resumen = () => {
  const {pedido} = useTienda()

  return (
    <Layout pagina='Resumen  y Detalles'>
      <section className='contenedor'>
        <h1 className='title'>Resumen</h1>
        <p className="font-semibold">Resumen detallado del pedido realizado</p>

        <section className='mt-5 grid justify-center gap-4 xl:grid-cols-2'>
          {
            pedido.length === 0 ? ( 
              <h2 className='font-semibold'>No has realizado pedidos aún</h2>
            )
            : (
              pedido.map( p =>(
                <PedidoProducto key={p.id} pedido ={p}/>
              ))
            )
          }
        </section>
      
      </section>
    </Layout>
  )
}

export default Resumen