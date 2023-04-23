import { Open_Sans } from "next/font/google";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import ModalProducto from "../components/ModalProducto";
import useTienda from "../hooks/useTienda";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navegacion from "../components/Navegacion";

const open = Open_Sans({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "500", "700"],
  display: "auto",
});

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#__next");

const Layout = ({ children, pagina = "Home" }) => {
  const { modal } = useTienda();

  return (
    <>
      <Head>
        <title>{`Fast Food Store - ${pagina}`}</title>
        <meta
          name="description"
          content="tienda de comida rapida , mejores precios del mercado"
        />
      </Head>

      <div className={`${open.className} flex flex-col md:flex-row h-screen `}>
        <Sidebar />
        <main className="md:w-8/12 lg:w-9/12 md:overflow-y-scroll">
          <Navegacion />
          {children}
        </main>
      </div>

      {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <ModalProducto />
        </Modal>
      )}
      <ToastContainer
        position="top-right"
        autoClose={1000}
        theme="light"
      />
    </>
  );
};

export default Layout;
