import Producto from "../../components/Producto";
import useTienda from "../../hooks/useTienda"
import Layout from "../../layout/Layout"


const Home = () => {
  const { categoriaActual } = useTienda();
  return (
    <Layout pagina={`Menú ${categoriaActual?.nombre}`}>
      <section className="contenedor">
        <h1 className="title">{categoriaActual?.nombre}</h1>
        <p className="font-semibold">Elige y personaliza tu pedido a continuacion</p>

        <section className="grilla mt-5">
          {categoriaActual?.productos?.map( producto =>(
            <Producto key={producto.id} producto={producto}/>
          ))}
        </section>
      </section>
    </Layout>
  )
}

export default Home