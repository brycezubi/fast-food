import Image from "next/image"
import Link from "next/link"
import useTienda from "../hooks/useTienda"

const Categoria = ({categoria}) => {

  const {handleClickCategoria , categoriaActual} = useTienda()

  const {nombre , id ,icono} =  categoria
  // console.log(categoriaActual)
  // `/${icono}`} 

  
  return (
    <div className={`${categoriaActual?.id === id ? 'bg-red-500' : ''} flex justify-center border border-red-200 py-3 hover:bg-amber-500 transition-all`}>
      <Link  
        href="/"
        className="flex items-center gap-2 font-bold text-lg"
        onClick={ ()=>handleClickCategoria(id)}
      >
        <Image 
          src={`/assets/img/icono_${icono}.svg`}
          width={90}
          height={60}
          alt={`icon image-${icono}`}
        />
        {nombre}
      </Link>
    </div>
  )
}

export default Categoria