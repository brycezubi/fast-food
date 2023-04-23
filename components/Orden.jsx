import Image from "next/image";
import { formatearCantidad } from "../helpers";
import { toast } from "react-toastify";

const Orden = ({ orden }) => {
  const { id, nombre, total, pedido } = orden;

  const completarOrden =async()=>{
    try {
      await fetch(`/api/ordenes/${id}`,{
        method: 'POST'
      })
      toast.success('Orden Completada')
    } catch (error) {
      toast.error('Hubo un error')

    }
  }

  return (
    <article className="flex flex-col gap-2 text-center bg-white text-black text-2xl font-semibold p-4 rounded-sm shadow">
      <h2 className="font-bold">Pedido: {id}</h2>
      <h3 className="text-red-500 text-center capitalize">Cliente:{nombre}</h3>
      <p className="text-3xl text-amber-500">
        Total a Pagar:{" "}
        <span>{formatearCantidad(total)}</span>
      </p>

      <button 
        className="btn-sm"
        type="button"
        onClick={completarOrden}
      >Completar Orden</button>

      <section className="my-5">
        {pedido?.map((p) => (
          <div
            key={p.id}
            className="flex border-b last-of-type:border-0 items-center px-4"
          >
            <Image
              className="block my-2"
              width={80}
              height={60}
              src={`/assets/img/${p.imagen}.jpg`}
              alt={`producto ${p.nombre}`}
            />

            <div className="flex flex-col gap-2 justify-center items-center text-center w-full">
              <p className="text-amber-500">{p.nombre}</p>
              <p>Cantidad: {p.cantidad}</p>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
};

export default Orden;
