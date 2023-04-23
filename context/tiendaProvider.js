import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const TiendaContext = createContext();

const TiendaProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido] = useState([]);
  const [total, setTotal] = useState(0);
  const [nombre, setNombre] = useState('');

  const router = useRouter();


  const getCategorias = async () => {
    const res = await fetch("/api/categorias");
    const data = await res.json();
    setCategorias(data);
  };

  useEffect(() => {
    getCategorias();
  }, []);

  useEffect(() => {
    setCategoriaActual(categorias[0]);
  }, [categorias]);

  useEffect(()=>{
    const nuevoTotal = pedido.reduce((acum , valor)=>{
      return (valor.precio * valor.cantidad) + acum
    },0)
    setTotal(nuevoTotal)
  },[pedido])

  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((cat) => cat.id === id);
    setCategoriaActual(categoria[0]);
  };

  const handleSetProducto = (producto) => {
    setProducto(producto);
  };

  const handleChangeModal = () => {
    setModal((modal) => !modal);
  };

  const handleEditarCantidad =(id)=>{
    const productoActualizar = pedido.filter( producto =>(
      producto.id === id
    ))
    setProducto(productoActualizar[0])
    setModal(!modal)
  }

  const handleEliminarProducto = (id)=>{
    const pedidoActualizado = pedido.filter( p=> p.id !== id)
    setPedido(pedidoActualizado)
  }
 
  // Al generar la ordern interactuamos con la base de datos
  // por eso usamos la funcion de manera asyncrona
  const handleGenerarOrden = async (e , data={pedido , nombre , total , fecha : Date.now().toString()})=>{
    e.preventDefault()
    try {
      const respuesta =  await fetch('/api/ordenes',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      // Reseteamos la App
      setCategoriaActual(categorias[0])
      setPedido([])
      setNombre('')
      setTotal(0)


    } catch (error) {
      console.log(error)
    } finally{
      toast('💗  Pedido Registrado correctamente')
      setTimeout(() => {
        router.push('/')
      }, 2000);
    }
    
    
  }

  const handleAgregarPedido = ({ categoriaId, ...producto }) => {
    if (pedido.some((productoState) => productoState.id === producto.id)) {
      // Actualizar la cantidad de producto
      const pedidoActualizado = pedido.map((pedidoState) =>
        pedidoState.id === producto.id ? producto : pedidoState
      );
      toast.info('🤙 Producto Actualizado')
      setPedido(pedidoActualizado);
    } else {
      setPedido([...pedido, producto]);
      toast.success('👍 Producto Agregado')
    }
    setModal(false);
  };

  return (
    <TiendaContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
        producto,
        handleSetProducto,
        handleEliminarProducto,
        modal,
        handleChangeModal,
        pedido,
        handleAgregarPedido,
        handleEditarCantidad,
        nombre,
        setNombre,
        handleGenerarOrden,
        total,
      }}
    >
      {children}
    </TiendaContext.Provider>
  );
};

export { TiendaProvider };
export default TiendaContext;
