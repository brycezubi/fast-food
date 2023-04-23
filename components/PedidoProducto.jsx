import Image from "next/image";
import { formatearCantidad } from "../helpers";
import useTienda from "../hooks/useTienda";

const PedidoProducto = ({ pedido }) => {
  const { handleEditarCantidad ,handleEliminarProducto} = useTienda()
  return (
    <article className="flex flex-col gap-3 md:flex-row md:gap-6 text-lg p-4 md:p-2 bg-white rounded-md shadow max-w-2xl">
      <Image
        className="mx-auto md:m-0 block rounded-sm"
        src={`/assets/img/${pedido.imagen}.jpg`}
        width={200}
        height={200}
        alt={`reference image-${pedido.nombre}`}
      />
      <section className="flex flex-col items-center justify-center w-full gap-2 text-center">
        <h2 className="font-bold text-xl md:text-2xl text-red-400">
          {pedido.nombre}
        </h2>
        <p className="font-bold">
          Cantidad : <span className="font-semibold">{pedido.cantidad}</span>
        </p>
        <p className="font-bold text-2xl text-amber-500">
          Precio :{" "}
          <span className="font-semibold">
            {formatearCantidad(pedido.precio)}
          </span>
        </p>
        <p className="font-semibold">
          Subtotal :{" "}
          <span className="font-semibold">
            {formatearCantidad(pedido.cantidad * pedido.precio)}
          </span>
        </p>

        <footer className="flex flex-col 2xl:flex-row gap-2 justify-center items-center w-full mt-2 text-white">
          <button onClick={()=>handleEditarCantidad(pedido.id)}
            className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 hover:cursor-pointer w-32 rounded-sm transition-all">
            Editar{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </button>
          <button onClick={()=>handleEliminarProducto(pedido.id)}
            className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-400 hover:cursor-pointer w-32 rounded-sm transition-all">
            Eliminar{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </footer>
      </section>
    </article>
  );
};

export default PedidoProducto;
