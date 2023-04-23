import Head from "next/head";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LayoutAdmin = ({children ,pagina}) => {
  return (
    <>
      <Head>
        <title>{`Café - ${pagina}`}</title>
        <meta
          name="description"
          content="tienda de comida rapida , mejores precios del mercado"
        />
      </Head>

      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5 border border-red-300">
          <Image
            className="mx-auto"
            width={300}
            height={100}
            src="/assets/img/logo.svg"
            alt="imagen logotipo"
            priority
          />
        </aside>

        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">{children}</div>
        </main>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        theme="light"
      />
    </>
  );
};

export default LayoutAdmin;
