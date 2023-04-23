import useSWR from "swr"
import LayoutAdmin from "./LayoutAdmin"
import Orden from "../../../components/Orden"

const Admin = () => {

  const fetcher = async()=> {
    const url =  '/api/ordenes'
    const response =  await fetch(url);
    if(!response.ok) throw new Error('Error al consultar url');
    return response.json()
  } 

  const { data, error, isLoading } = useSWR("/api/ordenes", fetcher , {refreshInterval:500})

  return (
    <LayoutAdmin pagina='Reparto'>
      <section className="pb-10 xl:pb-0">
        <h1 className="title">Administracion</h1>
        <p className="font-semibold">Recepcion  y despacho de Pedidos Realizados</p>

        <section className="grid xl:grid-cols-2 2xl:grid-cols-3 gap-3 mt-5">
          { data && data.length ? data.map(orden=>(
            <Orden key={orden.id} orden={orden} />
          )): <p>Aun no se Registran pedidos</p>} 
        </section>
      
      
      </section>
    </LayoutAdmin>
  )
}

export default Admin