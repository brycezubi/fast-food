import { useCallback, useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import useTienda from "../../hooks/useTienda";
import { formatearCantidad } from "../../helpers";

const Total = () => {
  const [error, setError] = useState(false);
  const { pedido, nombre, setNombre, handleGenerarOrden  , total} = useTienda();

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === "" || nombre.length < 3;
  }, [pedido, nombre]);

  useEffect(() => {
    comprobarPedido();
  }, [pedido, comprobarPedido]);

  return (
    <Layout pagina="Total">
      <section className="contenedor">
        <h1 className="title">Total</h1>
        <p className="font-semibold">
          Cuentas y Confirmacion de pagos a realizar{" "}
        </p>

        <section className="mt-5">
          <form
            onSubmit={handleGenerarOrden}
            className="max-w-2xl bg-white rounded-sm p-4 flex flex-col gap-3 "
          >
            <div>
              <label htmlFor="name" className="block uppercase font-semibold">
                Nombre
              </label>
              <input
                className="bg-gray-100 w-full mt-3 p-2 px-4 rounded-md"
                type="text"
                placeholder="ej. cesar zubilete..."
                id="name"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              {error && (
                <smal className="text-center text-red-500 font-semibold text-sm">
                  Campo Obligatorio
                </smal>
              )}
            </div>
            <div>
              <p className="uppercase font-semibold">
                Total a pagar : <span className="font-bold">{formatearCantidad(total)}</span>
              </p>
            </div>
            <div>
              <input
                className={`${
                  comprobarPedido()
                    ? "bg-indigo-100"
                    : "bg-indigo-500 hover:bg-indigo-400 hover:cursor-pointer"
                } text-white uppercase py-2 px-4 rounded-sm`}
                type="submit"
                value="confirmar pedido"
                disabled={comprobarPedido()}
              />
            </div>
          </form>
        </section>
      </section>
    </Layout>
  );
};

export default Total;
