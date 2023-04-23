import Image from "next/image";
import { formatearCantidad } from "../helpers/index";
import useTienda from "../hooks/useTienda";

const Producto = ({ producto }) => {

  const { handleSetProducto ,handleChangeModal }  = useTienda()

  const { nombre, imagen, precio } = producto;
  return (
    <article className="bg-white text-center shadow rounded-md overflow-hidden">
      <Image
        className="block w-full"
        width={350}
        height={250}
        src={`/assets/img/${imagen}.jpg`}
        alt={`producto-${nombre}`}
      />
      <section className="flex flex-col gap-3 py-4 px-6">
        <h2 className="text-xl font-semibold">{nombre}</h2>
        <p className="text-lg text-amber-500 font-semibold">
          Precio: {formatearCantidad(precio)}
        </p>

        <button onClick={()=>{
          handleSetProducto(producto)
          handleChangeModal()
        }}
          className="btn">
          Agregar
        </button>
      </section>
    </article>
  );
};

export default Producto;
