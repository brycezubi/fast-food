import { useEffect, useState } from "react";
import Image from "next/image";
import useTienda from "../hooks/useTienda";
import { formatearCantidad } from "../helpers";

const ModalProducto = () => {
  const [cantidad, setCantidad] = useState(1);
  const [edicion, setEdicion] = useState(false)
  const { producto, handleChangeModal, pedido, handleAgregarPedido } =
    useTienda();

  useEffect(() => {
    // Comprobamos si el modal actual ya se encuentra en el pedido
    if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
      // console.log("si existe");
      const productoEdicion  = pedido.find(
        pedidoState=> pedidoState.id === producto.id);
        setEdicion(true)
        setCantidad(productoEdicion.cantidad)
    } 
  }, [pedido , producto]);

  return (
    <article className="md:flex gap-8">
      <section className="md:1/3">
        <Image
          className="mx-auto rounded-md w-full md:w-5/6"
          src={`/assets/img/${producto.imagen}.jpg`}
          width={300}
          height={400}
          alt={`reference producto-${producto.imagen}`}
        />
      </section>
      <section className="md:2/3 relative md:flex md:items-center md:justify-center md:flex-col">
        <div className="absolute bottom-0 right-0 md:top-0 md:right-0 md:mb-4">
          <button onClick={() => handleChangeModal()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <h2 className="text-3xl font-bold md:mt-8 text-center pt-2 md:p-0">
          {producto.nombre}
        </h2>
        <p className="text-4xl font-bold text-amber-400 my-4 text-center">
          Precio: {formatearCantidad(producto.precio)}
        </p>
        <footer className="flex justify-center gap-4">
          <button
            onClick={() => {
              if (cantidad <= 1) return;
              setCantidad(cantidad - 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <p className="flex justify-center items-center text-xl border border-black font-semibold w-10 rounded-sm">
            {cantidad}
          </p>
          <button
            onClick={() => {
              if (cantidad >= 6) return;
              setCantidad(cantidad + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </footer>
        <button
          onClick={() => handleAgregarPedido({ ...producto, cantidad })}
          className="btn-modal block mt-5"
        >
          { edicion ? 'Guardar Cambios' : 'Agregar Pedido'}
        </button>
      </section>
    </article>
  );
};

export default ModalProducto;
